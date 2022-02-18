import { GetProducts } from "../../services/ProductServices";

export default async function (req, res) {
  try {
    const results = await GetProducts();
    res.send(results);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
