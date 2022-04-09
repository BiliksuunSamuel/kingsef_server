import { Request, Response } from "express";
import { GetPackageOrders } from "../../services/Services";

export default async function (req: Request, res: Response) {
  try {
    const data = await GetPackageOrders();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
}
