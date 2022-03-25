import { GetCategories } from "../../services/ProductServices";

export default async function GetCategoriesController(req, res) {
  try {
    res.send(await GetCategories());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
