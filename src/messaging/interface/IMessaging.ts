export interface IConnectedUser {
  name: string;
  socket: string;
  id: string;
  online: boolean;
  last_seen: string;
  type: string;
  role: number;
}

export interface IChat {
  message: string;
  seen: string[];
  time: string;
  copied_text: string;
  sender: string;
  receiver: string;
  deleted: boolean;
  ref: string;
  chat_id: string;
  sent: boolean;
  _id: string;
  id: string;
}
