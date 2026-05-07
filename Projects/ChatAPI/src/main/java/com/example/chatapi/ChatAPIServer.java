package com.example.chatapi;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import org.bukkit.Bukkit;

import java.io.*;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.Executors;

/**
 * 轻量 HTTP API 服务器
 *
 * 提供以下接口：
 *
 *   GET  /chat/poll
 *       返回并清空消息队列（JSON 数组）
 *
 *   POST /command
 *       Body (JSON): {"command":"say hello"}
 *       以控制台权限执行指令，返回 {"success":true} 或 {"success":false,"error":"..."}
 */
public class ChatAPIServer {

    private final int    port;
    private final String bindAddress;

    private final ChatAPIPlugin plugin;
    private final Gson gson = new Gson();

    // 线程安全的聊天消息队列
    private final ConcurrentLinkedQueue<ChatMessage> messageQueue = new ConcurrentLinkedQueue<>();

    private HttpServer httpServer;
    private volatile boolean running = false;

    public ChatAPIServer(ChatAPIPlugin plugin, String bindAddress, int port) {
        this.plugin      = plugin;
        this.bindAddress = bindAddress;
        this.port        = port;
    }

    // ──────────────────────────────────────────────────────────────
    //  生命周期
    // ──────────────────────────────────────────────────────────────

    public void start() throws IOException {
        httpServer = HttpServer.create(new InetSocketAddress(bindAddress, port), 0);
        httpServer.createContext("/chat/poll", new PollHandler());
        httpServer.createContext("/command",   new CommandHandler());
        httpServer.setExecutor(Executors.newFixedThreadPool(2));
        httpServer.start();
        running = true;
    }

    public void stop() {
        if (httpServer != null) {
            httpServer.stop(1);
        }
        running = false;
    }

    public boolean isRunning() { return running; }
    public String getBindAddress() { return bindAddress; }
    public int    getPort()        { return port; }

    // ──────────────────────────────────────────────────────────────
    //  消息推送（由聊天监听器调用）
    // ──────────────────────────────────────────────────────────────

    public void pushChatMessage(long timestamp, String player, String message) {
        messageQueue.offer(new ChatMessage(timestamp, player, message));
    }

    // ──────────────────────────────────────────────────────────────
    //  工具方法
    // ──────────────────────────────────────────────────────────────

    private void sendJson(HttpExchange exchange, int code, String body) throws IOException {
        byte[] bytes = body.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "application/json; charset=utf-8");
        exchange.sendResponseHeaders(code, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }

    private String readBody(HttpExchange exchange) throws IOException {
        try (InputStream is = exchange.getRequestBody();
             InputStreamReader isr = new InputStreamReader(is, StandardCharsets.UTF_8);
             BufferedReader br = new BufferedReader(isr)) {
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) {
                sb.append(line);
            }
            return sb.toString();
        }
    }

    // ──────────────────────────────────────────────────────────────
    //  Handler: GET /chat/poll
    // ──────────────────────────────────────────────────────────────

    private class PollHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"GET".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJson(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
                return;
            }

            StringBuilder sb = new StringBuilder("[");
            boolean first = true;
            ChatMessage msg;
            while ((msg = messageQueue.poll()) != null) {
                if (!first) sb.append(",");
                sb.append(gson.toJson(msg));
                first = false;
            }
            sb.append("]");

            sendJson(exchange, 200, sb.toString());
        }
    }

    // ──────────────────────────────────────────────────────────────
    //  Handler: POST /command
    // ──────────────────────────────────────────────────────────────

    private class CommandHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJson(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
                return;
            }

            String body = readBody(exchange);
            if (body == null || body.isEmpty()) {
                sendJson(exchange, 400, "{\"success\":false,\"error\":\"Empty body\"}");
                return;
            }

            String command;
            try {
                JsonObject obj = new JsonParser().parse(body).getAsJsonObject();
                command = obj.get("command").getAsString().trim();
            } catch (Exception e) {
                sendJson(exchange, 400, "{\"success\":false,\"error\":\"Invalid JSON: " +
                        escapeJson(e.getMessage()) + "\"}");
                return;
            }

            if (command.isEmpty()) {
                sendJson(exchange, 400, "{\"success\":false,\"error\":\"Empty command\"}");
                return;
            }

            final String finalCommand = command;

            try {
                Bukkit.getScheduler().callSyncMethod(plugin, () -> {
                    Bukkit.dispatchCommand(Bukkit.getConsoleSender(), finalCommand);
                    return null;
                }).get();
                sendJson(exchange, 200, "{\"success\":true}");
            } catch (Exception e) {
                plugin.getLogger().warning("Command execution error: " + e.getMessage());
                sendJson(exchange, 500, "{\"success\":false,\"error\":\"" +
                        escapeJson(e.getMessage()) + "\"}");
            }
        }

        private String escapeJson(String s) {
            if (s == null) return "null";
            return s.replace("\\", "\\\\")
                    .replace("\"", "\\\"")
                    .replace("\n", "\\n")
                    .replace("\r", "\\r");
        }
    }

    // ──────────────────────────────────────────────────────────────
    //  内部数据类
    // ──────────────────────────────────────────────────────────────

    private static class ChatMessage {
        final long   timestamp;
        final String player;
        final String message;

        ChatMessage(long timestamp, String player, String message) {
            this.timestamp = timestamp;
            this.player    = player;
            this.message   = message;
        }
    }
}
