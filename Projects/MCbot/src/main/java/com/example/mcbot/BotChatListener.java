package com.example.mcbot;

import org.bukkit.Bukkit;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.event.player.AsyncPlayerChatEvent;

import java.util.List;
import java.util.Map;

/**
 * 监听聊天消息中的 @bot / @mcbot 触发
 *
 * 规则：
 *   - 所有 @ 消息照常显示（不拦截），MCbot 回复以广播追加
 *   - @bot 等效 @mcbot（无指令时广播"喵"）
 *   - 宽泛匹配：抽奖≈积分抽奖，积分排行≈排行≈排名≈积分排名
 */
public class BotChatListener implements Listener {

    private static final String BOT_PREFIX = "@bot";
    private static final String BOT_NAME   = "§6[MCbot] §r";

    private final MCbotPlugin plugin;

    public BotChatListener(MCbotPlugin plugin) {
        this.plugin = plugin;
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onChat(AsyncPlayerChatEvent event) {
        String msg    = event.getMessage().trim();
        Player player = event.getPlayer();
        String lower  = msg.toLowerCase();

        // ── @mcbot / @bot（无指令）→ 广播 喵 ──────────────────
        if (lower.equals("@mcbot") || lower.equals("@bot")) {
            Bukkit.getScheduler().runTask(plugin, () ->
                Bukkit.broadcastMessage(BOT_NAME + "喵")
            );
            return;
        }

        // ── @mcbot XXX / @bot XXX ────────────────────────────────
        if (lower.startsWith("@mcbot ") || lower.startsWith("@bot ")) {
            // 统一去掉前缀，取指令部分
            String raw;
            if (lower.startsWith("@mcbot ")) {
                raw = msg.substring("@mcbot ".length()).trim();
            } else {
                raw = msg.substring("@bot ".length()).trim();
            }

            String matched = resolveCmd(raw);
            if (matched != null) {
                String finalMatched = matched;
                Bukkit.getScheduler().runTask(plugin, () ->
                    handleBotCommand(player, finalMatched)
                );
            }
            // 无法匹配指令时不做任何额外回复，原始消息照常显示
            return;
        }
    }

    /**
     * 宽泛关键词前缀匹配 → 标准化指令名
     * 抽奖 ≈ 积分抽奖；积分排行 ≈ 排行 ≈ 排名 ≈ 积分排名
     */
    private String resolveCmd(String input) {
        // 签到
        if (input.startsWith("签到")) return "签到";

        // 抽奖（宽泛）
        if (input.startsWith("抽奖") || input.startsWith("积分抽奖")) return "抽奖";

        // 积分排行（宽泛）
        if (input.startsWith("积分排行") || input.startsWith("排行")
            || input.startsWith("排名") || input.startsWith("积分排名"))
            return "积分排行";

        // 个人信息（宽泛）
        if (input.startsWith("个人信息") || input.startsWith("信息")
            || input.startsWith("我的信息")) return "个人信息";

        // 菜单
        if (input.startsWith("菜单")) return "菜单";

        return null;
    }

    /**
     * 执行指令，结果广播给所有玩家
     * 菜单：向每个在线玩家单独发送可点击 tellraw
     */
    private void handleBotCommand(Player player, String cmd) {
        PointsManager pm         = plugin.getPointsManager();
        String        playerName = player.getName();

        switch (cmd) {
            case "签到": {
                String result = pm.doSign(playerName);
                if (result == null) {
                    broadcast(BOT_NAME + "§e@" + playerName + " §c你今天已经签到过了，明天再来吧！");
                } else {
                    broadcast(BOT_NAME + "§e@" + playerName + " " + result);
                }
                break;
            }
            case "抽奖": {
                String[] result = pm.doDraw(playerName);
                broadcast(BOT_NAME + "§e@" + playerName + " " + result[0]);
                break;
            }
            case "积分排行": {
                List<Map.Entry<String, PointsManager.PlayerData>> rank = pm.getRanking();
                broadcast(BOT_NAME + "§6·====·§e本服积分榜§6·====·");
                int end = Math.min(5, rank.size());
                for (int i = 0; i < end; i++) {
                    Map.Entry<String, PointsManager.PlayerData> e = rank.get(i);
                    broadcast(BOT_NAME + " §f" + (i + 1) + ". §b" + e.getKey()
                            + " §7| 积分：§e" + e.getValue().points
                            + " §7| 累计签到：§a" + e.getValue().totalSignDays + "天");
                }
                if (rank.isEmpty()) broadcast(BOT_NAME + "§7暂无数据");
                break;
            }
            case "个人信息": {
                PointsManager.PlayerData d = pm.getData(playerName);
                broadcast(BOT_NAME + "§7----·§e个人信息§7·----");
                broadcast(BOT_NAME + "§e@" + playerName + "§7·积分余额: §6" + d.points);
                broadcast(BOT_NAME + "§7累计签到: §a" + d.totalSignDays
                        + "天  §7连续签到: §a" + d.consecutiveDays + "天");
                broadcast(BOT_NAME + "§7今日抽奖: §b" + d.todayDrawTimes + "/10 §7次");
                break;
            }
            case "菜单": {
                // 向每个在线玩家发送可点击菜单（tellraw 需逐人发送）
                broadcast(BOT_NAME + "§e@" + playerName + " §7打开了菜单");
                for (Player p : Bukkit.getOnlinePlayers()) {
                    sendMenuTo(p);
                }
                break;
            }
        }
    }

    /** 向单个玩家发送可点击菜单 */
    private void sendMenuTo(Player p) {
        p.sendMessage(BOT_NAME + "§6·====·§e菜单§6·====·");
        plugin.sendClickablePublic(p, "green",        "-- 签到",     "/签到",     "点击签到，每日获得积分");
        plugin.sendClickablePublic(p, "light_purple", "-- 积分排行", "/积分排行", "点击查看全服积分排行");
        plugin.sendClickablePublic(p, "aqua",         "-- 积分抽奖", "/抽奖",     "点击参与每日抽奖");
        plugin.sendClickablePublic(p, "yellow",       "-- 个人信息", "/个人信息", "点击查看你的积分信息");
    }

    private void broadcast(String msg) {
        Bukkit.broadcastMessage(msg);
    }
}
