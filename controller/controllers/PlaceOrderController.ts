import { IOrderInfo } from "../../interface/IModel";

export default async function PlaceOrderController(req, res) {
  try {
    const orderInfo: IOrderInfo = req.body;
    console.log(orderInfo);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
