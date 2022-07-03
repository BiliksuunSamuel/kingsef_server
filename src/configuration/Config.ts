export const Db_URL = "mongodb://localhost:27017/kinsef";
import nodeMailer from "nodemailer";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
export const connectionString =
  "mongodb+srv://samuelbills:77045109@cluster0.nakki.mongodb.net/kinsef";
// Db_URL;

const transporter = nodeMailer.createTransport({
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

export const cloudinary_configuration = cloudinary.config({
  cloud_name: "bhills",
  api_key: "332227748632362",
  api_secret: "DbNdOWLRZ_Xm96Hj--ns1149k20",
});

dotenv.config();

const port = process.env.PORT || process.env.port;

export const config = {
  server: {
    port,
  },
};

export default transporter;
