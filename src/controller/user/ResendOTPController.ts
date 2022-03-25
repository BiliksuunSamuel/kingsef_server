import { GenerateOTP } from "../../functions/functions";
import {
  SendMail,
  PrepareEmail,
  PrepareMessage,
} from "../../services/EmailServices";
import {
  GetUserByEmail,
  ResendOTP as UserResendOTP,
} from "../../services/UserServices";
import { ResendOTP } from "../../services/AuthServices";
export default async function (req, res) {
  try {
    const info = req.body;
    const new_otp = await GenerateOTP();
    const data: any = await GetUserByEmail(info.email);
    await UserResendOTP(info.email);
    await ResendOTP({ id: info.auth_id, otp: new_otp });

    ///
    await SendMail(
      PrepareEmail({
        sender: "KinSef",
        receiver: data?.info.email,
        subject: "Account Registration",
        message: PrepareMessage({
          name: `${data?.info?.firstname} ${data?.info?.lastname}`,
          otp: new_otp,
        }),
      })
    );
    res.send(await GetUserByEmail(info.email));
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
