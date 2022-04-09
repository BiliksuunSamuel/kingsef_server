import { Request, Response } from "express";
import moment from "moment";
import { IPackageOrder } from "../../interface/IModel";
import { AddPackageOrder } from "../../services/Services";

export default async function (req: Request, res: Response) {
  try {
    const info: IPackageOrder = req.body;
    const Info = {
      ...info,
      date_ordered: moment().format(),
      status: { processed: 0, approved: false, declined: false },
    };
    await AddPackageOrder(Info);
    res.send("Order Placed Sucessfully,Awaiting Approval");
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
