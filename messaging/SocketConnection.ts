import { Server } from "socket.io";

export default function SocketConnection(io: Server) {
  io.on("connection", (socket) => {
    console.log(socket.id);
  });
}
