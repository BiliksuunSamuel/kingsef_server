import { GenerateOTP } from "../../functions/functions";
import { RegisterAuthInfo } from "../../services/AuthServices";
import { HashPassword } from "../../utilities/HandlePassword";
import {
  PrepareEmail,
  PrepareMessage,
  SendMail,
} from "../../services/EmailServices";
import { AddVendor, GetVendorByEmail } from "../../services/VendorServices";
import moment from "moment";

export default async function (req, res) {
  try {
    const data = req.body;
    const info = {
      info: { ...data.info, authenticated: false, auth_id: "" },
      bank: data.bank,
      country: data.country,
      business: data.business,
      account: { status: 0, role: 0 },
    };
    const results = await GetVendorByEmail({ email: info.info.email });
    if (results) {
      res.send(results);
    } else {
      const auth = data.auth;
      const otp = GenerateOTP();
      const Auth = {
        password: auth.password,
        authenticated: false,
        otp: { code: otp, status: 0 },
      };
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
      Auth.password = await HashPassword(Auth.password);
      info.country.dial_code = info.country.dial_code[0];
      info.country.currency = info.country.currency[0];
      info.info.otp_expiresIn = moment().add(15, "minutes").format();
      const AuthInfo: any = await RegisterAuthInfo(Auth);
      info.info.auth_id = AuthInfo._id;
      const UInfo: any = await AddVendor(info);
      res.send(UInfo);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
