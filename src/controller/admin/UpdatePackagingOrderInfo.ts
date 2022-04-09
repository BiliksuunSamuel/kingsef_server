import { Request, Response } from "express";
import { IPackageOrder } from "../../interface/IModel";
import {
  GetPackageOrders,
  UpdatePackagingOrderInfo,
} from "../../services/Services";

export default async function (request: Request, response: Response) {
  try {
    const data = request.body;
    await UpdatePackagingOrderInfo(data, data._id);
    response.send({
      data: await GetPackageOrders(),
      message: "Order Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    response.status(404).send("Server Network Error");
  }
}
