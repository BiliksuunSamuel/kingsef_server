import { GetOrders } from "../../services/OrderServices";

export default async function GetOrdersController(req, res) {
  try {
    res.send(await GetOrders());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
