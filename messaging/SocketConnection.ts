import { Server, Socket } from "socket.io";

export default function SocketConnection(io: Server) {
  io.on("connect", (socket) => {
    socket.on("user-review", (data) => {
      socket.broadcast.emit("user-review", data);
    });
  });
}
