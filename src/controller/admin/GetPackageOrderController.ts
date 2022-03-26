import { Request, Response } from "express";
import { GetPackageOrders } from "../../services/Services";

export default async function (req: Request, res: Response) {
  try {
    res.send(await GetPackageOrders());
  } catch (error) {
    console.log(error);
  }
}
