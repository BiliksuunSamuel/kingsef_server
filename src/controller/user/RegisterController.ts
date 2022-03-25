import moment from "moment";
import OTP from "otp-client";
import { GenerateOTP } from "../../functions/functions";
import { RegisterAuthInfo } from "../../services/AuthServices";
import {
  PrepareEmail,
  PrepareMessage,
  SendMail,
} from "../../services/EmailServices";
import { RegisterUser } from "../../services/UserServices";
import { HashPassword } from "../../utilities/HandlePassword";

export default async function RegisterController(req, res) {
  try {
    const data: any = req.body;

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
    const info = {
      info: {
        ...data.info,
        auth_id: "",
        status: 1,
        authenticated: false,
        otp_expiresIn: moment().add(15, "minute").format(),
      },
      country: { ...data.country, currency: data.country.currency[0] },
    };
    const authInfo = data.auth;
    authInfo.password = await HashPassword(authInfo.password);
    const Auth = { ...authInfo, otp: { code: otp, status: 0 } };
    info.country.dial_code = info.country.dial_code[0];
    const AuthInfo: any = await RegisterAuthInfo(Auth);
    info.info.auth_id = AuthInfo._id;
    const results = await RegisterUser(info);
    res.send(results);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
