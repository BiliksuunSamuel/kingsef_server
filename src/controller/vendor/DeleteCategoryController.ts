import { Request, Response } from "express";
import { DeleteProductCategory } from "../../services/ManagementServices";
import { GetCategories } from "../../services/ProductServices";

export default async function (request: Request, response: Response) {
  try {
    const data = request.body;
    await DeleteProductCategory(data.id);
    response.send({
      data: await GetCategories(),
      message: "Product Category Removed Successfully",
    });
  } catch (error) {
    console.log(error);
    response.status(404).send("Server Network Error");
  }
}
