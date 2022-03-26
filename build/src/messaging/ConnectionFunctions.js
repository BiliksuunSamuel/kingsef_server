"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveConnection = exports.PrepareConnectionInfo = exports.AddNewConnection = void 0;
const moment_1 = __importDefault(require("moment"));
const Connections_1 = __importStar(require("./Connections"));
function AddNewConnection(info) {
    const index = Connections_1.default.findIndex((u) => u.id === info.id);
    if (index === -1) {
        Connections_1.default.push(info);
        return Connections_1.default;
    }
    else {
        const connectedUsers = Connections_1.default.map((con) => {
            if (con.id === info.id) {
                return Object.assign(Object.assign({}, con), { online: true, last_seen: (0, moment_1.default)().format() });
            }
            else {
                return con;
            }
        });
        (0, Connections_1.UpdateConnectedUsers)(connectedUsers);
        return Connections_1.default;
    }
}
exports.AddNewConnection = AddNewConnection;
function PrepareConnectionInfo(info) {
    return Object.assign(Object.assign({}, info), { online: true, last_seen: (0, moment_1.default)().format() });
}
exports.PrepareConnectionInfo = PrepareConnectionInfo;
function RemoveConnection(info) {
    Connections_1.default.map((connection) => {
        if (connection.id === info.id) {
            connection.online = false;
            connection.last_seen = (0, moment_1.default)().format();
        }
    });
    return Connections_1.default;
}
exports.RemoveConnection = RemoveConnection;
