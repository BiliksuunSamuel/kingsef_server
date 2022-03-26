import { Request, Response } from "express";
import moment from "moment";
import { AddReview } from "../../services/Services";

export default async function (req: Request, res: Response) {
  try {
    const info = req.body;
    await AddReview({ ...info, date_added: moment().format() });
    res.send("Reveiw Submitted Successfully,Thank you for your time");
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
