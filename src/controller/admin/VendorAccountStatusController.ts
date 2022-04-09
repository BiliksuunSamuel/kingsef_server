import { Request, Response } from "express";
import { IVendorInfo } from "../../interface/IVendor";
import { AccountApprovalEmail } from "../../services/EmailServices";
import {
  AccountStatus,
  GetVendorById,
  GetVendors,
} from "../../services/VendorServices";

export default async function (req: Request, res: Response) {
  try {
    const data = req.body;
    const vendor = <any>await GetVendorById(data?.id);
    if (vendor) {
      await AccountApprovalEmail({ to: vendor?.info?.email });
    }
    await AccountStatus({ id: data?.id, status: data?.status });
    res.send(await GetVendors());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
