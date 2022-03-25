import { GetDeliveryPricings } from "../../services/Services";

export default async function (_, res) {
  try {
    res.send(await GetDeliveryPricings());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
