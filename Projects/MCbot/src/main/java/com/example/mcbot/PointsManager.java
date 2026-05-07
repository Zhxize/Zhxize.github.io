package com.example.mcbot;

import com.google.gson.*;
import com.google.gson.reflect.TypeToken;

import java.io.*;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 积分 / 签到 / 抽奖  数据管理
 * 持久化到 plugins/MCbot/points.json
 */
public class PointsManager {

    // ── 单玩家数据结构 ─────────────────────────────────────────────

    public static class PlayerData {
        public int    points          = 0;
        public int    totalSignDays   = 0;
        public int    consecutiveDays = 0;
        public String lastSignDate    = "";
        public int    todayDrawTimes  = 0;
        public String lastDrawDate    = "";
    }

    // ── 常量 ───────────────────────────────────────────────────────

    private static final int SIGN_REWARD     = 3;
    private static final int DRAW_FREE_LIMIT = 1;
    private static final int DRAW_MAX_TIMES  = 10;
    private static final int DRAW_COST       = 5;
    private static final int DRAW_MIN        = 0;
    private static final int DRAW_MAX        = 20;

    // ── 内部字段 ───────────────────────────────────────────────────

    private final MCbotPlugin plugin;
    private final Map<String, PlayerData> data = new ConcurrentHashMap<>();
    private final Gson gson = new GsonBuilder().setPrettyPrinting().create();
    private final Path file;

    // ── 构造 / IO ──────────────────────────────────────────────────

    public PointsManager(MCbotPlugin plugin) {
        this.plugin = plugin;
        this.file   = plugin.getDataFolder().toPath().resolve("points.json");
        load();
    }

    private void ensureFile() {
        try {
            if (!Files.exists(file.getParent())) Files.createDirectories(file.getParent());
            if (!Files.exists(file)) Files.write(file, "{}".getBytes(StandardCharsets.UTF_8));
        } catch (IOException e) {
            plugin.getLogger().severe("创建 points.json 失败: " + e.getMessage());
        }
    }

    @SuppressWarnings("unchecked")
    private void load() {
        ensureFile();
        try (Reader r = Files.newBufferedReader(file, StandardCharsets.UTF_8)) {
            Type type = new TypeToken<Map<String, PlayerData>>(){}.getType();
            Map<String, PlayerData> loaded = gson.fromJson(r, type);
            if (loaded != null) data.putAll(loaded);
            plugin.getLogger().info("已加载 " + data.size() + " 条积分数据");
        } catch (Exception e) {
            plugin.getLogger().warning("读取 points.json 失败: " + e.getMessage());
        }
    }

    public void save() {
        ensureFile();
        try (Writer w = Files.newBufferedWriter(file, StandardCharsets.UTF_8)) {
            gson.toJson(data, w);
        } catch (IOException e) {
            plugin.getLogger().severe("保存 points.json 失败: " + e.getMessage());
        }
    }

    // ── 工具 ───────────────────────────────────────────────────────

    private PlayerData getOrCreate(String player) {
        return data.computeIfAbsent(player, k -> new PlayerData());
    }

    private String today() {
        return new java.text.SimpleDateFormat("yyyy-MM-dd").format(new Date());
    }

    private void resetDrawIfNewDay(PlayerData d) {
        String t = today();
        if (!t.equals(d.lastDrawDate)) {
            d.todayDrawTimes = 0;
            d.lastDrawDate   = t;
        }
    }

    /** 断签判断：若上次签到不是昨天，重置连续天数 */
    private void resetSignIfNewDay(PlayerData d) {
        if (d.lastSignDate.isEmpty()) return;
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DAY_OF_MONTH, -1);
        String yesterday = new java.text.SimpleDateFormat("yyyy-MM-dd").format(cal.getTime());
        if (!yesterday.equals(d.lastSignDate)) {
            d.consecutiveDays = 0;
        }
    }

    // ── 公共 API ───────────────────────────────────────────────────

    /**
     * 签到
     * @return 成功消息；今日已签返回 null
     */
    public String doSign(String player) {
        PlayerData d = getOrCreate(player);
        String t = today();
        if (t.equals(d.lastSignDate)) return null;

        resetSignIfNewDay(d);
        d.consecutiveDays++;
        d.totalSignDays++;
        d.points += SIGN_REWARD;
        d.lastSignDate = t;
        save();

        return "§a签到成功! 积分+" + SIGN_REWARD
                + " §7累计签到 §f" + d.totalSignDays + "§7天"
                + " §7连续签到 §f" + d.consecutiveDays + "§7天"
                + " §7当前积分: §e" + d.points;
    }

    /**
     * 抽奖
     * @return String[2] = { 消息, "ok"/"fail" }
     */
    public String[] doDraw(String player) {
        PlayerData d = getOrCreate(player);
        resetDrawIfNewDay(d);

        if (d.todayDrawTimes >= DRAW_MAX_TIMES)
            return new String[]{"§c今日次数已达上限！明天再来吧！", "fail"};

        boolean isFree = (d.todayDrawTimes < DRAW_FREE_LIMIT);
        if (!isFree) {
            if (d.points < DRAW_COST)
                return new String[]{"§c积分不足！需要 " + DRAW_COST + " 积分才能抽奖。", "fail"};
            d.points -= DRAW_COST;
        }

        int reward = DRAW_MIN + new Random().nextInt(DRAW_MAX - DRAW_MIN + 1);
        d.points += reward;
        d.todayDrawTimes++;
        d.lastDrawDate = today();
        save();

        String prefix = isFree ? "§b今日首次抽奖免费！ " : "§e花费 " + DRAW_COST + " 积分！ ";
        String msg = prefix
                + "§f抽到 §6" + reward + " §f积分!"
                + " §7当前总积分: §e" + d.points
                + " §7今日已抽 §f" + d.todayDrawTimes + " §7次";
        return new String[]{msg, "ok"};
    }

    /** 积分排行（降序；同积分按累计签到天数降序） */
    public List<Map.Entry<String, PlayerData>> getRanking() {
        List<Map.Entry<String, PlayerData>> list = new ArrayList<>(data.entrySet());
        list.sort((a, b) -> {
            int pc = Integer.compare(b.getValue().points, a.getValue().points);
            return pc != 0 ? pc : Integer.compare(b.getValue().totalSignDays, a.getValue().totalSignDays);
        });
        return list;
    }

    public PlayerData getData(String player) {
        return data.getOrDefault(player, new PlayerData());
    }
}
