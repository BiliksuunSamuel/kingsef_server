export const Db_URL = "mongodb://localhost:27017/kinsef";
import nodeMailer from "nodemailer";

export const connectionString =
  "mongodb+srv://samuelbills:<password>@cluster0.nakki.mongodb.net/test";

const transporter = nodeMailer.createTransport({
  port: 465,
  secure: process.env.NODE_ENV !== "development",
  host: process.env.mail_host,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

export default transporter;
