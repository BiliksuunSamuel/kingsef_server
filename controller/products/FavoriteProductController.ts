import { Request, Response } from "express";
import {
  GetProducts,
  MakeProductFavorite,
} from "../../services/ProductServices";

export default async function (req: Request, res: Response) {
  try {
    const info: { id: string; favorites: string[] } = req.body;
    await MakeProductFavorite(info);
    res.send(await GetProducts());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
