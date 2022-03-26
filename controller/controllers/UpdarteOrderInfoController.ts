import { IOrderInfo } from "../../interface/IModel";
import { GetOrders, UpdateOrderInfo } from "../../services/OrderServices";
import { Request, Response } from "express";

export default async function UpdateOrderInfoController(
  req: Request,
  res: Response
) {
  try {
    const info: any = req.body;
    await UpdateOrderInfo({ id: info._id, info: info });
    res.send(await GetOrders());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
