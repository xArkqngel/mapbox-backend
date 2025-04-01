import http from "http";
import { Server } from "socket.io";
import app from "./app.js";

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado:", socket.id);

  socket.on("new_asset", (data) => {
    console.log("Nuevo activo registrado:", data);
    io.emit("new_asset", data);
  });

  socket.on("update_asset", (data) => {
    console.log("Activo actualizado:", data);
    io.emit("update_asset", data);
  });

  socket.on("delete_asset", (assetId) => {
    console.log("Activo eliminado:", assetId);
    io.emit("delete_asset", { id: assetId });
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

export { server, io };
