import { Request, Response } from "express";
import {
  GetVendorById,
  UpdateAccountInfo,
} from "../../services/VendorServices";

export default async function (req: Request, res: Response) {
  try {
    const info: any = req.body;
    await UpdateAccountInfo(info, info._id);
    res.send(
      "Account Details Updated Successfully, changes will be applied on you next login"
    );
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
