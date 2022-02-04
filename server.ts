require("dotenv").config();
import path from "path";
import express from "express";
import http from "http";
import cors from "cors";
import "./connection/DbConnection";
import { AdminRouter, Router, UserRouter, VendorRouter } from "./router";
import moment from "moment";

const port = process.env.PORT || process.env.port;
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false, limit: "100mb" }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(UserRouter);
app.use(AdminRouter);
app.use(Router);
app.use(VendorRouter);

// console.log(moment().add(15, "minute").format());
///STARTING THE SERVER ON PORT 3030
server.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
