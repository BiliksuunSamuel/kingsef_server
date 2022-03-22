import moment from "moment";
import { Server, Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";
import { GetHelpCenterChats, SaveHelpCenterChat } from "../services/Services";
import {
  AddNewConnection,
  PrepareConnectionInfo,
  RemoveConnection,
} from "./ConnectionFunctions";
import { IChat } from "./interface/IMessaging";
import {
  SocketOnAdminConnection,
  SocketOnConnect,
  SocketOnDisconnect,
  SocketOnMessage,
} from "./socketEvents";

export default function SocketConnection(io: Server) {
  io.on("connect", async (socket) => {
    socket.emit("chats", await GetHelpCenterChats());
    socket.on("user-review", (data) => {
      socket.broadcast.emit("user-review", data);
    });
    socket.on("connect-me", (info) => {
      SocketOnConnect(info, socket);
    });
    socket.on("disconnect-me", (info) => {
      SocketOnDisconnect(info, socket);
    });
    socket.on("help_center_message", async (message: IChat, callback) => {
      message.time = moment().format();
      message.sent = true;
      callback(message);
      SocketOnMessage(message, socket);
      await SaveHelpCenterChat({
        message: message.message,
        seen: message.seen,
        time: message.time,
        copied_text: message.copied_text,
        sender: message.sender,
        receiver: message.receiver,
        deleted: message.deleted,
        ref: message.ref,
        chat_id: message.chat_id,
        sent: message.sent,
        id: message.id,
      });
    });
    socket.on("admin-connected", () => {
      SocketOnAdminConnection(socket);
    });
  });
}
