import { Request, Response } from "express";
import { EnableDisableProduct } from "../../services/ProductServices";

export default async function (request: Request, response: Response) {
  try {
    const info: any = request.body;
    await EnableDisableProduct(info, info._id);
    response.send("Product Status Changed Successfully");
  } catch (error) {
    console.log(error);
    response.status(404).send("Server Network Error");
  }
}
