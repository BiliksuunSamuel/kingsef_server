import { Request, Response } from "express";
import { GetUsers } from "../../services/UserServices";

export default async function (req: Request, res: Response) {
  try {
    res.send(await GetUsers());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
