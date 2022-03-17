import { IConnectedUser } from "./interface/IMessaging";

let ConnectedUsers: IConnectedUser[] = [];

export function SetConnectedUsers(data: IConnectedUser[]) {
  ConnectedUsers = data;
}

export default ConnectedUsers;
