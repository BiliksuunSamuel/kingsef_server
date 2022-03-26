import { Request, Response } from "express";
import { GetCategories } from "../../services/ProductServices";

export default async function GetCategoriesController(
  req: Request,
  res: Response
) {
  try {
    res.send(await GetCategories());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
