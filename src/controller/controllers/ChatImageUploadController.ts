import { Request, Response } from "express";
import { WriteBase64FileChatImage } from "../../functions/Functions";
import { v4 as uuid } from "uuid";
export default async function (request: Request, response: Response) {
  try {
    const data: { basefile: any } = request.body;
    const path = await WriteBase64FileChatImage(
      data.basefile,
      Date.now().toString()
    );
    response.send(path);
  } catch (error) {
    console.log(error);
    response.status(404).send("File Upload Failed");
  }
}
