import { GenerateOTP } from "../../functions/Functions";
import {
  SendMail,
  PrepareEmail,
  PrepareMessage,
} from "../../services/EmailServices";
import {
  GetVendorByEmail,
  ResendOTP as InfoResendOTP,
} from "../../services/VendorServices";
import { ResendOTP } from "../../services/AuthServices";
import { Request, Response } from "express";
export default async function (req: Request, res: Response) {
  try {
    const info = req.body;
    console.log(info);
    const new_otp = await GenerateOTP();
    const data: any = await GetVendorByEmail({ email: info.email });
    await InfoResendOTP(info.email);
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
    res.send(await GetVendorByEmail({ email: info.email }));
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
