"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
require("./src/connection/DbConnection");
const socket_io_1 = __importDefault(require("socket.io"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const router_1 = require("./src/router");
const SocketConnection_1 = __importDefault(require("./src/messaging/SocketConnection"));
const Config_1 = require("./src/configuration/Config");
const port = process.env.PORT || process.env.port;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.default.Server(server);
(0, SocketConnection_1.default)(io);
app.use((0, cors_1.default)());
app.use((0, express_fileupload_1.default)());
app.use(express_1.default.json({ limit: "100mb" }));
app.use(express_1.default.urlencoded({ extended: false, limit: "100mb" }));
app.use(express_1.default.static("./src/public"));
app.use(express_1.default.static(path_1.default.join(__dirname, "./src/public")));
app.use(router_1.UserRouter);
app.use(router_1.AdminRouter);
app.use(router_1.Router);
app.use(router_1.VendorRouter);
// console.log(moment(Date.now()).format("DD/MMMM/YYYY"));
// console.log(moment().add(15, "minute").format());
///STARTING THE SERVER ON PORT 3030
server.listen(Config_1.config.server.port, () => {
    console.log(`server running on http://localhost:${port}`);
});
////////////
