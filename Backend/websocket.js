import { WebSocketServer } from "ws";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const server = http.createServer();
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("⚡ WebSocket connected");
  ws.on("message", (msg) => {
    console.log("📩 Received:", msg.toString());
    ws.send(`Echo: ${msg}`);
  });
});

const WS_PORT = process.env.WS_PORT || 3001; // use 3001 for WS
server.listen(WS_PORT, () => {
  console.log(`🚀 WebSocket running on ws://localhost:${WS_PORT}`);
});
