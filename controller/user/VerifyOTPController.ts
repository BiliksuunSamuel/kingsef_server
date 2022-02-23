import { GetAuthById, OTPAccepted } from "../../services/AuthServices";
import { GetUserByEmail, OTPApproved } from "../../services/UserServices";

export default async function (req, res) {
  try {
    const info: any = req.body;
    const auth: any = await GetAuthById(info.auth_id);
    if (!auth) {
      res.status(404).send("Acccess Denied");
    } else {
      const match = Boolean(auth.otp.code === info.otp);
      if (match) {
        await OTPApproved({ email: info?.email });
        await OTPAccepted({ id: info.auth_id });
        const userInfo: any = await GetUserByEmail(info.email);
        res.send(userInfo);
      } else {
        res.status(404).send("Invalid OTP Code");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}