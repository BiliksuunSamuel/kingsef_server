import { GetPackageOrders } from "../../services/Services";

export default async function (req, res) {
  try {
    res.send(await GetPackageOrders());
  } catch (error) {
    console.log(error);
  }
}
