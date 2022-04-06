import { Request, Response } from "express";
import { GetDebitsPayments } from "../../services/Services";

export default async function (request: Request, response: Response) {
  try {
    response.send(await GetDebitsPayments());
  } catch (error) {
    console.log(error);
    response.status(404).send("Server Network Error");
  }
}
