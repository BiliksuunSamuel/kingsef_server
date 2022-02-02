export const Db_URL = "mongodb://localhost:27017/kinsef";
import nodeMailer from "nodemailer";

const transporter = nodeMailer.createTransport({
  port: 465,
  host: process.env.mail_host,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
  secure: true,
});

export default transporter;
