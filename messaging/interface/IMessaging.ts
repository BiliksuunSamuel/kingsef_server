export interface IConnectedUser {
  name: string;
  socket: string;
  id: string;
  online: boolean;
  last_seen: string;
  type: string;
}
