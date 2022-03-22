import moment from "moment";
import ConnectedUsers, { UpdateConnectedUsers } from "./Connections";
import { IConnectedUser } from "./interface/IMessaging";

export function AddNewConnection(info: IConnectedUser) {
  const index = ConnectedUsers.findIndex((u) => u.id === info.id);
  if (index === -1) {
    ConnectedUsers.push(info);
    return ConnectedUsers;
  } else {
    const connectedUsers = ConnectedUsers.map((con) => {
      if (con.id === info.id) {
        return { ...con, online: true, last_seen: moment().format() };
      } else {
        return con;
      }
    });
    UpdateConnectedUsers(connectedUsers);
    return ConnectedUsers;
  }
}

export function PrepareConnectionInfo(info: IConnectedUser) {
  return <IConnectedUser>{
    ...info,
    online: true,
    last_seen: moment().format(),
  };
}

export function RemoveConnection(info: { id: string }) {
  ConnectedUsers.map((connection) => {
    if (connection.id === info.id) {
      connection.online = false;
      connection.last_seen = moment().format();
    }
  });
  return ConnectedUsers;
}
