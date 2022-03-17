import { Server, Socket } from "socket.io";
import {
  AddNewConnection,
  PrepareConnectionInfo,
  RemoveConnection,
} from "./ConnectionFunctions";

export default function SocketConnection(io: Server) {
  io.on("connect", (socket) => {
    socket.on("user-review", (data) => {
      socket.broadcast.emit("user-review", data);
    });
    socket.on("connect-me", (info) => {
      console.log(
        AddNewConnection(PrepareConnectionInfo({ ...info, socket: socket.id }))
      );
    });
    socket.on("disconnect-me", (info) => {
      console.log(RemoveConnection(info));
    });
  });
}
