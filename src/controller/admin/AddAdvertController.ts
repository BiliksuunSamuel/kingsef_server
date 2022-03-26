import { v4 as uuidv4 } from "uuid";
import { WriteBase64File } from "../../functions/Functions";
import { AddAdvert, GetAdverts } from "../../services/Services";
import { Request, Response } from "express";

export default async function AddAdvertController(req: Request, res: Response) {
  try {
    const data: any[] = req.body;
    for (let i = 0; i < data.length; i++) {
      const banner = data[i];
      const filename = await WriteBase64File(banner?.data, uuidv4());
      await AddAdvert({ path: filename });
    }
    res.send({
      message: "Advertisement Added Successfull",
      data: await GetAdverts(),
    });
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
