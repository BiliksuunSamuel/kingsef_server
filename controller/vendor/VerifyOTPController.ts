import { GetAuthById, OTPAccepted } from "../../services/AuthServices";
import { GetVendorByEmail, OTPApproved } from "../../services/VendorServices";

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
        res.send(await GetVendorByEmail({ email: info.email }));
      } else {
        res.status(404).send("Invalid OTP Code");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
