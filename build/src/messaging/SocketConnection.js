"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const Services_1 = require("../services/Services");
const socketEvents_1 = require("./socketEvents");
function SocketConnection(io) {
    io.on("connect", (socket) => __awaiter(this, void 0, void 0, function* () {
        socket.emit("chats", yield (0, Services_1.GetHelpCenterChats)());
        socket.on("user-review", (data) => {
            socket.broadcast.emit("user-review", data);
        });
        socket.on("connect-me", (info) => {
            (0, socketEvents_1.SocketOnConnect)(info, socket);
        });
        socket.on("disconnect-me", (info) => {
            (0, socketEvents_1.SocketOnDisconnect)(info, socket);
        });
        socket.on("help_center_message", (message, callback) => __awaiter(this, void 0, void 0, function* () {
            message.time = (0, moment_1.default)().format();
            message.sent = true;
            callback(message);
            (0, socketEvents_1.SocketOnMessage)(message, socket);
            yield (0, Services_1.SaveHelpCenterChat)({
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
        }));
        socket.on("admin-connected", () => {
            (0, socketEvents_1.SocketOnAdminConnection)(socket);
        });
    }));
}
exports.default = SocketConnection;
