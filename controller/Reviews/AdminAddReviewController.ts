import { Request, Response } from "express";
import moment from "moment";
import { IAdminComments } from "../../interface/IModel";
import {
  AddAdminComment,
  GetAdminComments,
} from "../../services/ReviewServices";

export default async function AdminAddCommentsController(
  req: Request,
  res: Response
) {
  try {
    const info: IAdminComments = req.body;
    await AddAdminComment({ ...info, date_added: moment().format() });
    res.send({
      data: await GetAdminComments(),
      message: "Message Sent Successfull",
    });
  } catch (error) {
    console.log();
    res.status(404).send("Server Network Error");
  }
}
