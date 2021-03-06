import { Request, Response } from "express";
import { IUserAccountInfo } from "../../interface/IUserModel";
import { GetAuthById } from "../../services/AuthServices";
import { GetUserByEmail } from "../../services/UserServices";
import { GetVendorByEmail } from "../../services/VendorServices";
import { VerifyPassword } from "../../utilities/HandlePassword";

export default async function (req: Request, res: Response) {
  try {
    const data: { email: string; password: string } = req.body;
    const VendorInfo: any = await GetVendorByEmail({ email: data.email });
    const UserInfo = <IUserAccountInfo>await GetUserByEmail(data.email);

    if (VendorInfo) {
      const AuthInfo: any = await GetAuthById(VendorInfo.info.auth_id);
      const match = await VerifyPassword(data.password, AuthInfo.password);
      if (match) {
        res.send({ vendor: VendorInfo, user: null });
      } else {
        res.status(404).send("Incorrect Login Password");
      }
    } else if (UserInfo) {
      const AuthInfo: any = await GetAuthById(UserInfo.info.auth_id);
      const match = await VerifyPassword(data.password, AuthInfo.password);
      if (match) {
        res.send({ vendor: null, user: UserInfo });
      } else {
        res.status(404).send("Incorrect Login Password");
      }
    } else {
      res.status(404).send("Invalid Login Email Addresss");
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
