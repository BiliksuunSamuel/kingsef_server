import moment from "moment";
import { GenerateOTP } from "../../functions/functions";
import { IOrderInfo } from "../../interface/IModel";
import { OrderPlacementEmailMessage } from "../../services/EmailServices";
import { AddOrder, GetOrders } from "../../services/OrderServices";

export default async function PlaceOrderController(req, res) {
  try {
    const orderInfo: IOrderInfo = req.body;
    orderInfo.date = moment().format();
    orderInfo.reference = GenerateOTP();
    orderInfo.ratings = { raters: [], values: [] };

    await OrderPlacementEmailMessage({
      to: orderInfo.billing.email,
      amount: orderInfo.amount,
      qnty: orderInfo.content.length,
      currency: orderInfo.currency,
    });
    await AddOrder(orderInfo);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
