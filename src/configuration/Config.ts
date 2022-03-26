export const Db_URL = "mongodb://localhost:27017/kinsef";
import nodeMailer from "nodemailer";
import dotenv from "dotenv";

export const connectionString =
  "mongodb+srv://samuelbills:77045109@cluster0.nakki.mongodb.net/kinsef";
// Db_URL;

const transporter = nodeMailer.createTransport({
  port: 465,
  secure: process.env.NODE_ENV !== "development",
  host: process.env.mail_host,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

dotenv.config();

const port = process.env.PORT || process.env.port;

export const config = {
  server: {
    port,
  },
};

export default transporter;
