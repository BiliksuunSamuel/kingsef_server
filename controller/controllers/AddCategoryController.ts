import { AddCategory, GetCategories } from "../../services/ProductServices";

export default async function AddCategoryController(req, res) {
  try {
    const info = req.body;
    await AddCategory(info);
    res.send({
      data: await GetCategories(),
      message: "Category Added Succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send("Sever Network Error");
  }
}
