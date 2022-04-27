import { Request, Response } from "express";
import { IPasswordResetModel } from "../../interface/IModel";
import { IAuthInfo } from "../../interface/IPersonModel";
import { IUserAccountInfo } from "../../interface/IUserModel";
import { IVendorAccountInfo } from "../../interface/IVendorModel";
import {
  GetAuthById,
  UpdateAccountPassword,
} from "../../services/AuthServices";
import { GetUserByEmail } from "../../services/UserServices";
import { GetVendorByEmail } from "../../services/VendorServices";
import { HashPassword } from "../../utilities/HandlePassword";

export default async function (req: Request, res: Response) {
  try {
    const data: IPasswordResetModel = req.body;
    const vendorInfo = <IVendorAccountInfo>(
      await GetVendorByEmail({ email: data.email })
    );
    const userInfo = <IUserAccountInfo>await GetUserByEmail(data.email);

    if (vendorInfo) {
      const authInfo = <IAuthInfo>await GetAuthById(vendorInfo.info.auth_id);
      if (authInfo) {
        if (authInfo.otp.code === data.otp) {
          await UpdateAccountPassword({
            id: vendorInfo.info.auth_id,
            password: <string>await HashPassword(data.pwd),
          });
          data.otp = "";
          data.email = "";
          data.pwd = "";
          data.isvalid = true;
          data.completed = true;

          res.send({ data, message: "Account Password Changed Successfully" });
        } else {
          res.status(404).send("Invalid OTP Code");
        }
      } else {
        res.status(404).send("invalid email address,try again");
      }
    } else if (userInfo) {
      const authInfo = <IAuthInfo>await GetAuthById(userInfo.info.auth_id);
      if (authInfo) {
        if (authInfo.otp.code === data.otp) {
          await UpdateAccountPassword({
            id: userInfo.info.auth_id,
            password: <string>await HashPassword(data.pwd),
          });
          data.otp = "";
          data.email = "";
          data.pwd = "";
          data.isvalid = true;
          data.completed = true;

          res.send({ data, message: "Account Password Changed Successfully" });
        } else {
          res.status(404).send("Invalid OTP Code");
        }
      } else {
        res.status(404).send("invalid email address,try again");
      }
    } else {
      res.status(404).send("invalid email address,try again");
    }
  } catch (error) {
    res.status(404).send("Server Network Error");
  }
}
