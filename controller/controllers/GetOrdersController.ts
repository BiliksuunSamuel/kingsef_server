import { Request, Response } from "express";
import { GetOrders } from "../../services/OrderServices";

export default async function GetOrdersController(req: Request, res: Response) {
  try {
    res.send(await GetOrders());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
