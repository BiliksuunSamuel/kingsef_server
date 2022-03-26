import { Request, Response } from "express";
import { GetMerits } from "../../services/ModelServices";

export default async function (req: Request, res: Response) {
  try {
    res.send(await GetMerits());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
