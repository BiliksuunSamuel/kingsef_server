import { Request, Response } from "express";
import { GetAdminComments } from "../../services/ReviewServices";

export default async function GetAdminCommentsController(
  req: Request,
  res: Response
) {
  try {
    res.send(await GetAdminComments());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
