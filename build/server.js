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
const path_1 = __importStar(require("path"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
require("./src/connection/DbConnection");
const socket_io_1 = __importDefault(require("socket.io"));
const router_1 = require("./src/router");
const SocketConnection_1 = __importDefault(require("./src/messaging/SocketConnection"));
const Config_1 = require("./src/configuration/Config");
const port = process.env.PORT || process.env.port;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.default.Server(server);
(0, SocketConnection_1.default)(io);
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "100mb" }));
app.use(express_1.default.urlencoded({ extended: false, limit: "100mb" }));
app.use(express_1.default.static("public"));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(router_1.UserRouter);
app.use(router_1.AdminRouter);
app.use(router_1.Router);
app.use(router_1.VendorRouter);
console.log((0, path_1.dirname)("./public/products/"));
// console.log(moment().add(15, "minute").format());
///STARTING THE SERVER ON PORT 3030
server.listen(Config_1.config.server.port, () => {
    console.log(`server running on http://localhost:${port}`);
});
////////////
