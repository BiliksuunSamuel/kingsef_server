import OTP from "otp-client";
import { GenerateOTP } from "../../functions/functions";
import {
  PrepareEmail,
  PrepareMessage,
  SendMail,
} from "../../services/EmailServices";

export default async function RegisterController(req, res) {
  try {
    const data = req.body;
    console.log(data);
    const otp = GenerateOTP();
    await SendMail(
      PrepareEmail({
        sender: "KinSef",
        receiver: data.info.email,
        subject: "Account Registration",
        message: PrepareMessage({
          name: `${data.info.firstname} ${data.info.lastname}`,
          otp,
        }),
      })
    );
    res.status(404).send("Got the data");
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
