import { Response, Request } from "express";
import { UpdateProductCategory } from "../../services/ManagementServices";
import { GetCategories } from "../../services/ProductServices";

export default async function (request: Request, response: Response) {
  try {
    const data = request.body;
    await UpdateProductCategory(data, data?._id);
    response.send({
      data: await GetCategories(),
      message: "Product Category Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    response.status(404).send("Server Network Error");
  }
}
