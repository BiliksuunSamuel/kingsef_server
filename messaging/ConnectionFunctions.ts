import moment from "moment";
import ConnectedUsers, { SetConnectedUsers } from "./Connections";
import { IConnectedUser } from "./interface/IMessaging";

export function AddNewConnection(info: IConnectedUser) {
  const index = ConnectedUsers.findIndex((u) => u.id === info.id);
  if (index === -1) {
    ConnectedUsers.push(info);
    return ConnectedUsers;
  } else {
    ConnectedUsers.map((con) => {
      if (con.id === info.id) {
        con.online = true;
        con.last_seen = moment().format();
      }
    });
    return ConnectedUsers;
  }
}

export function PrepareConnectionInfo(info: {
  name: string;
  socket: string;
  id: string;
  type: string;
}) {
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
