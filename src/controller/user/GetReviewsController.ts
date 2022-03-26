import { Request, Response } from "express";
import { GetReviews } from "../../services/Services";

export default async function (req: Request, res: Response) {
  try {
    res.send(await GetReviews());
  } catch (error) {
    console.log(error);
    res.status(404).send("Sever Network Error");
  }
}
