import { IOrderInfo } from "../../interface/IModel";

export default async function UpdateOrderInfoController(req, res) {
  try {
    const info: IOrderInfo = req.body;
    console.log(info);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
