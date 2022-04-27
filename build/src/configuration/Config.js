"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.cloudinary_configuration = exports.connectionString = exports.Db_URL = void 0;
exports.Db_URL = "mongodb://localhost:27017/kinsef";
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
const cloudinary_1 = require("cloudinary");
exports.connectionString = "mongodb+srv://samuelbills:77045109@cluster0.nakki.mongodb.net/kinsef";
// Db_URL;
const transporter = nodemailer_1.default.createTransport({
    port: 465,
    secure: true,
    host: "smtp.gmail.com",
    auth: {
        user: "bhills7704@gmail.com",
        pass: "kbrcxtpyojawngjr",
    },
    tls: {
        rejectUnauthorized: false,
    },
});
exports.cloudinary_configuration = cloudinary_1.v2.config({
    cloud_name: "bhills",
    api_key: "332227748632362",
    api_secret: "DbNdOWLRZ_Xm96Hj--ns1149k20",
});
dotenv_1.default.config();
const port = process.env.PORT || process.env.port;
exports.config = {
    server: {
        port,
    },
};
exports.default = transporter;
