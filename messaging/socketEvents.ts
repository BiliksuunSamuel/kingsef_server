import moment from "moment";
import { Socket } from "socket.io";
import { PrepareConnectionInfo } from "./ConnectionFunctions";
import { IChat, IConnectedUser } from "./interface/IMessaging";

let ConnectedUsers: IConnectedUser[] = [];
export function SocketOnMessage(info: IChat, socket: Socket) {
  socket.broadcast.emit("receive-message", info);
}

export function SocketOnConnect(info: IConnectedUser, socket: Socket) {
  const conInfo = PrepareConnectionInfo({ ...info, socket: socket.id });
  const Info = ConnectedUsers.find((user) => user.id === info.id);
  if (Info) {
    ConnectedUsers = ConnectedUsers.map((con) => {
      if (con.id === info.id) {
        return { ...con, online: false, last_seen: moment().format() };
      } else {
        return con;
      }
    });
  } else {
    ConnectedUsers.push(conInfo);
  }
  socket.broadcast.emit("user-disconnect", ConnectedUsers);
}

export function SocketOnDisconnect(id: string, socket: Socket) {
  ConnectedUsers.map((con) => {
    if (con.id === id) {
      con.online = false;
      con.last_seen = moment().format();
    }
  });
}

export function SocketOnAdminConnection(socket: Socket) {
  socket.emit("admin-connected", ConnectedUsers);
}
