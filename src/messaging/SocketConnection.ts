import moment from "moment";
import { Server, Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";
import { HandleFileUpload } from "../functions/CloudinaryUpload";
import { WriteBase64FileChatImage } from "../functions/Functions";
import {
  GetHelpCenterChats,
  SaveHelpCenterChat,
  UpdateChatMessageSeen,
} from "../services/Services";
import {
  AddNewConnection,
  PrepareConnectionInfo,
  RemoveConnection,
} from "./ConnectionFunctions";
import ConnectedUsers from "./Connections";
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

    socket.on("image-message", async (data: { message: IChat }, callback) => {
      try {
        const message = data.message;
        message.time = moment().format();
        message.sent = true;
        message.type = "image";
        SocketOnMessage(message, socket);
        const newMessage = await SaveHelpCenterChat({
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
          type: "image",
          source: message.source,
        });
        callback(message);
        io.emit("help_center_message", await GetHelpCenterChats());
      } catch (error) {
        console.log(error);
      }
    });
    socket.on("help_center_message", async (message: IChat, callback) => {
      message.time = moment().format();
      message.sent = true;
      message.type = "text";
      message.source = "";
      callback(message);
      SocketOnMessage(message, socket);
      const newMessage = await SaveHelpCenterChat({
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
        type: "text",
        source: "",
      });
      io.emit("help_center_message", await GetHelpCenterChats());
    });
    socket.on("admin-connected", () => {
      SocketOnAdminConnection(socket);
    });

    socket.on("profile-update", (data, callback) => {
      io.emit("profile-update", `${data.name} Updated Their Account Details`);
      socket.removeListener("profile-update", () => {});
      callback("sent");
    });
  });
}
