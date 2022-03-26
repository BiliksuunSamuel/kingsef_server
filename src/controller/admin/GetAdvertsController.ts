import { Request, Response } from "express";
import { GetAdverts } from "../../services/Services";

export default async function GetAdvertsController(
  req: Request,
  res: Response
) {
  try {
    const results = await GetAdverts();
    res.send(results);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
