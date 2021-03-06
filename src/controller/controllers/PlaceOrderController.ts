import { Request, Response } from "express";
import moment from "moment";
import { GenerateOTP } from "../../functions/Functions";
import { IOrderContentItem, IOrderInfo } from "../../interface/IModel";
import { OrderPlacementEmailMessage } from "../../services/EmailServices";
import { AddOrder, GetOrders } from "../../services/OrderServices";

export default async function PlaceOrderController(
  req: Request,
  res: Response
) {
  try {
    const orderInfo: IOrderInfo = req.body;
    orderInfo.date = moment().format();
    orderInfo.reference = GenerateOTP();
    orderInfo.ratings = { raters: [], values: [] };
    orderInfo.sellers = GetSellers(orderInfo.content);
    orderInfo.status.approved = true;
    orderInfo.status.processed = 1;

    await OrderPlacementEmailMessage(orderInfo);
    await AddOrder(orderInfo);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}

function GetSellers(content: IOrderContentItem[]) {
  const sellers = Array.from(
    new Set(content.map(({ ["seller"]: value }) => value))
  );
  return sellers;
}
