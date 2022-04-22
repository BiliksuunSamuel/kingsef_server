import path, { dirname } from "path";
import express from "express";
import http from "http";
import cors from "cors";
import "./src/connection/DbConnection";
import socketIo from "socket.io";
import { AdminRouter, Router, UserRouter, VendorRouter } from "./src/router";
import SocketConnection from "./src/messaging/SocketConnection";
import { config } from "./src/configuration/Config";
import moment from "moment";
const port = process.env.PORT || process.env.port;
const app = express();
const server = http.createServer(app);
const io = new socketIo.Server(server);
SocketConnection(io);
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false, limit: "100mb" }));
app.use(express.static("./src/public"));
app.use(express.static(path.join(__dirname, "./src/public")));
app.use(UserRouter);
app.use(AdminRouter);
app.use(Router);
app.use(VendorRouter);

// console.log(moment(Date.now()).format("DD/MMMM/YYYY"));
// console.log(moment().add(15, "minute").format());
///STARTING THE SERVER ON PORT 3030
server.listen(config.server.port, () => {
  console.log(`server running on http://localhost:${port}`);
});
////////////
