package com.example.chatapi;

import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.event.player.AsyncPlayerChatEvent;

/**
 * 监听玩家聊天事件，将消息推送到 ChatAPIServer 消息队列
 */
public class ChatListener implements Listener {

    private final ChatAPIServer apiServer;

    public ChatListener(ChatAPIServer apiServer) {
        this.apiServer = apiServer;
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onPlayerChat(AsyncPlayerChatEvent event) {
        String playerName = event.getPlayer().getName();
        String message    = event.getMessage();
        long   timestamp  = System.currentTimeMillis();

        apiServer.pushChatMessage(timestamp, playerName, message);
    }
}
