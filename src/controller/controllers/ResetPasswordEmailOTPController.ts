import { Request, Response } from "express";
import { GenerateOTP } from "../../functions/Functions";
import { IPasswordResetModel } from "../../interface/IModel";
import { IUserAccountInfo } from "../../interface/IUserModel";
import { IVendorAccountInfo } from "../../interface/IVendorModel";
import { UpdateAccountOTP } from "../../services/AuthServices";
import {
  PrepareEmail,
  PreparePasswordResetMailMessage,
  SendMail,
} from "../../services/EmailServices";
import { GetUserByEmail } from "../../services/UserServices";
import { GetVendorByEmail } from "../../services/VendorServices";

export default async function (req: Request, res: Response) {
  try {
    const data: IPasswordResetModel = req.body;
    const userInfo = <IUserAccountInfo>await GetUserByEmail(data.email);
    const vendorInfo = <IVendorAccountInfo>(
      await GetVendorByEmail({ email: data.email })
    );

    const otp = GenerateOTP();
    if (userInfo) {
      const mailInfo = PrepareEmail({
        sender: "KINSEF",
        receiver: userInfo.info.email,
        subject: "KINSEF- Account Password Reset",
        message: PreparePasswordResetMailMessage({
          name: userInfo.info.firstname,
          otp,
        }),
      });
      await SendMail(mailInfo);
      await UpdateAccountOTP({ id: userInfo.info.auth_id, otp });
      data.isvalid = true;
      res.send(data);
    } else if (vendorInfo) {
      const mailInfo = PrepareEmail({
        sender: "KINSEF",
        receiver: vendorInfo.info.email,
        subject: "KINSEF- Account Password Reset",
        message: PreparePasswordResetMailMessage({
          name: vendorInfo.info.firstname,
          otp,
        }),
      });
      await SendMail(mailInfo);
      await UpdateAccountOTP({ id: vendorInfo.info.auth_id, otp });
      data.isvalid = true;
      res.send(data);
    } else {
      res.status(404).send("incorrect email address");
    }
  } catch (error) {
    res.status(404).send("");
  }
}
