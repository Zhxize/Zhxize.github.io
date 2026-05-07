package com.example.mcbot;

import org.bukkit.Bukkit;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.plugin.java.JavaPlugin;

import java.util.List;
import java.util.Map;

public class MCbotPlugin extends JavaPlugin {

    private PointsManager   pointsManager;
    private BotChatListener botListener;

    // ── 生命周期 ────────────────────────────────────────────────────

    @Override
    public void onEnable() {
        saveDefaultConfig();
        pointsManager = new PointsManager(this);
        botListener   = new BotChatListener(this);
        getServer().getPluginManager().registerEvents(botListener, this);
        getLogger().info("MCbot 已启用。");
    }

    @Override
    public void onDisable() {
        if (pointsManager != null) pointsManager.save();
        getLogger().info("MCbot 已关闭，数据已保存。");
    }

    public PointsManager getPointsManager() { return pointsManager; }

    // ── 指令入口 ────────────────────────────────────────────────────

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        String name = command.getName().toLowerCase();

        switch (name) {

            // ── /mcbot ──────────────────────────────────────────────
            case "mcbot": {
                sender.sendMessage("§6MCbot §eV" + getDescription().getVersion()
                        + " §7By §bZhXiZe §8<AIGC>");
                return true;
            }

            // ── /签到 ───────────────────────────────────────────────
            case "签到": {
                if (!(sender instanceof Player)) {
                    sender.sendMessage("§c只有玩家才能使用此指令！");
                    return true;
                }
                String result = pointsManager.doSign(sender.getName());
                if (result == null) {
                    sender.sendMessage("§e[签到] §c你今天已经签到过了，明天再来吧！");
                } else {
                    sender.sendMessage("§e[签到] " + result);
                }
                return true;
            }

            // ── /抽奖 ───────────────────────────────────────────────
            case "抽奖": {
                if (!(sender instanceof Player)) {
                    sender.sendMessage("§c只有玩家才能使用此指令！");
                    return true;
                }
                String[] result = pointsManager.doDraw(sender.getName());
                sender.sendMessage("§b[抽奖] " + result[0]);
                return true;
            }

            // ── /积分排行 ───────────────────────────────────────────
            case "积分排行": {
                int page = 1;
                if (args.length >= 1) {
                    try { page = Integer.parseInt(args[0]); } catch (NumberFormatException ignored) {}
                }
                if (page < 1) page = 1;

                List<Map.Entry<String, PointsManager.PlayerData>> rank = pointsManager.getRanking();
                int perPage    = 5;
                int totalPages = Math.max(1, (rank.size() + perPage - 1) / perPage);
                if (page > totalPages) page = totalPages;

                sender.sendMessage("§6·====·§e本服积分榜§6·====· §7(第 " + page + "/" + totalPages + " 页)");
                int start = (page - 1) * perPage;
                int end   = Math.min(start + perPage, rank.size());
                for (int i = start; i < end; i++) {
                    Map.Entry<String, PointsManager.PlayerData> e = rank.get(i);
                    sender.sendMessage(" §f" + (i + 1) + ". §b" + e.getKey()
                            + " §7| 积分：§e" + e.getValue().points
                            + " §7| 累计签到：§a" + e.getValue().totalSignDays + "天");
                }
                if (rank.isEmpty()) sender.sendMessage(" §7暂无数据");
                if (page < totalPages)
                    sender.sendMessage("§7输入 /积分排行 " + (page + 1) + " 看下页");
                return true;
            }

            // ── /个人信息 ───────────────────────────────────────────
            case "个人信息": {
                if (!(sender instanceof Player)) {
                    sender.sendMessage("§c只有玩家才能使用此指令！");
                    return true;
                }
                PointsManager.PlayerData d = pointsManager.getData(sender.getName());
                sender.sendMessage("§7----·§e个人信息§7·----");
                sender.sendMessage("§e@" + sender.getName() + " §7·积分余额: §6" + d.points);
                sender.sendMessage("§7累计签到: §a" + d.totalSignDays + "天  §7连续签到: §a" + d.consecutiveDays + "天");
                sender.sendMessage("§7今日抽奖: §b" + d.todayDrawTimes + "/10 §7次");
                return true;
            }

            // ── /菜单 ────────────────────────────────────────────────
            case "菜单": {
                if (!(sender instanceof Player)) {
                    sender.sendMessage("§6·====·§e菜单§6·====·");
                    sender.sendMessage("  §a-- 签到       §7→ /签到");
                    sender.sendMessage("  §d-- 积分排行   §7→ /积分排行");
                    sender.sendMessage("  §b-- 积分抽奖   §7→ /抽奖");
                    sender.sendMessage("  §e-- 个人信息   §7→ /个人信息");
                    return true;
                }
                // 向所有在线玩家发送可点击菜单
                Player trigger = (Player) sender;
                Bukkit.broadcastMessage("§6[MCbot] §e@" + trigger.getName() + " §7打开了菜单");
                for (Player p : Bukkit.getOnlinePlayers()) {
                    p.sendMessage("§6·====·§e菜单§6·====·");
                    sendClickablePublic(p, "green",        "-- 签到",     "/签到",     "点击签到，每日获得积分");
                    sendClickablePublic(p, "light_purple", "-- 积分排行", "/积分排行", "点击查看全服积分排行");
                    sendClickablePublic(p, "aqua",         "-- 积分抽奖", "/抽奖",     "点击参与每日抽奖");
                    sendClickablePublic(p, "yellow",       "-- 个人信息", "/个人信息", "点击查看你的积分信息");
                }
                return true;
            }
        }

        return false;
    }

    // ── 可点击消息（通过 tellraw 发送，无需 bungee 依赖）────────────

    /**
     * 向玩家发送一条可点击文本行（供主类和 BotChatListener 共用）
     */
    public void sendClickablePublic(Player player, String color, String display, String command, String hover) {
        String json = "[\"\","
            + "{\"text\":\"  " + escJson(display) + "\","
            + "\"color\":\"" + color + "\","
            + "\"bold\":false,"
            + "\"clickEvent\":{\"action\":\"run_command\",\"value\":\"" + escJson(command) + "\"},"
            + "\"hoverEvent\":{\"action\":\"show_text\","
            + "\"value\":{\"text\":\"" + escJson(hover) + "\",\"color\":\"white\"}}}]";
        Bukkit.dispatchCommand(Bukkit.getConsoleSender(),
            "tellraw " + player.getName() + " " + json);
    }

    /** JSON 字符串转义：双引号、反斜杠、换行 */
    private static String escJson(String s) {
        return s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n");
    }
}
