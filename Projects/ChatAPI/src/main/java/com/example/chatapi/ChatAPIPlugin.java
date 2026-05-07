package com.example.chatapi;

import org.bukkit.Bukkit;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.plugin.java.JavaPlugin;

/**
 * ChatAPI Plugin
 *
 * 功能：
 *   - 监听玩家聊天，实时转发至本地 HTTP API（127.0.0.1:26656）
 *   - 接收外部 POST /command 指令，以控制台权限执行
 *
 * 指令：
 *   /chatapi reload   — 重载配置
 *   /chatapi status   — 查看服务状态
 *
 * API 端点：
 *   GET  http://127.0.0.1:26656/chat/poll    → 获取并清空聊天消息队列
 *   POST http://127.0.0.1:26656/command      → Body: {"command":"..."} 执行控制台命令
 */
public class ChatAPIPlugin extends JavaPlugin {

    private ChatAPIServer apiServer;
    private ChatListener  chatListener;

    @Override
    public void onEnable() {
        saveDefaultConfig();

        int    port     = getConfig().getInt("port",         26656);
        String address  = getConfig().getString("bind-address", "127.0.0.1");

        apiServer = new ChatAPIServer(this, address, port);
        try {
            apiServer.start();
            getLogger().info("ChatAPI HTTP server started on " + address + ":" + port);
        } catch (Exception e) {
            getLogger().severe("Failed to start ChatAPI HTTP server: " + e.getMessage());
            getServer().getPluginManager().disablePlugin(this);
            return;
        }

        chatListener = new ChatListener(apiServer);
        getServer().getPluginManager().registerEvents(chatListener, this);

        getLogger().info("ChatAPI plugin enabled.");
    }

    @Override
    public void onDisable() {
        if (apiServer != null) {
            apiServer.stop();
            getLogger().info("ChatAPI HTTP server stopped.");
        }
        getLogger().info("ChatAPI plugin disabled.");
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (!command.getName().equalsIgnoreCase("chatapi")) return false;

        if (args.length == 0) {
            sender.sendMessage("§6[ChatAPI] §fUsage: /chatapi <reload|status>");
            return true;
        }

        switch (args[0].toLowerCase()) {
            case "reload":
                reloadConfig();
                sender.sendMessage("§6[ChatAPI] §aConfig reloaded.");
                break;
            case "status":
                if (apiServer != null && apiServer.isRunning()) {
                    sender.sendMessage("§6[ChatAPI] §fAPI Server: §aRUNNING on "
                            + apiServer.getBindAddress() + ":" + apiServer.getPort());
                } else {
                    sender.sendMessage("§6[ChatAPI] §fAPI Server: §cSTOPPED");
                }
                break;
            default:
                sender.sendMessage("§6[ChatAPI] §fUnknown sub-command. Use reload|status.");
        }
        return true;
    }
}
