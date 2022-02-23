import { Server } from "socket.io";

export default function SocketConnection(io: Server) {
  io.on("connect", (socket) => {
    console.log(socket.id);
  });
}
