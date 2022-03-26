"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketOnAdminConnection = exports.SocketOnDisconnect = exports.SocketOnConnect = exports.SocketOnMessage = void 0;
const moment_1 = __importDefault(require("moment"));
const ConnectionFunctions_1 = require("./ConnectionFunctions");
let ConnectedUsers = [];
function SocketOnMessage(info, socket) {
    socket.broadcast.emit("receive-message", info);
}
exports.SocketOnMessage = SocketOnMessage;
function SocketOnConnect(info, socket) {
    const conInfo = (0, ConnectionFunctions_1.PrepareConnectionInfo)(Object.assign(Object.assign({}, info), { socket: socket.id }));
    const Info = ConnectedUsers.find((user) => user.id === info.id);
    if (Info) {
        ConnectedUsers = ConnectedUsers.map((con) => {
            if (con.id === info.id) {
                return Object.assign(Object.assign({}, con), { online: false, last_seen: (0, moment_1.default)().format() });
            }
            else {
                return con;
            }
        });
    }
    else {
        ConnectedUsers.push(conInfo);
    }
    socket.broadcast.emit("user-disconnect", ConnectedUsers);
}
exports.SocketOnConnect = SocketOnConnect;
function SocketOnDisconnect(id, socket) {
    ConnectedUsers.map((con) => {
        if (con.id === id) {
            con.online = false;
            con.last_seen = (0, moment_1.default)().format();
        }
    });
}
exports.SocketOnDisconnect = SocketOnDisconnect;
function SocketOnAdminConnection(socket) {
    socket.emit("admin-connected", ConnectedUsers);
}
exports.SocketOnAdminConnection = SocketOnAdminConnection;
