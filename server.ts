require("dotenv").config();
import express from "express";
import http from "http";
import cors from "cors";
import "./connection/DbConnection";
import { AdminRouter, UserRouter } from "./router";

const port = process.env.PORT || process.env.port;
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: 10000000 }));
app.use(UserRouter);
app.use(AdminRouter);

///STARTING THE SERVER ON PORT 3030
server.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
