import { WriteBase64File } from "../../functions/Functions";
import { v4 as uuidv4 } from "uuid";
import { AddDisplayCat, GetDisplayCats } from "../../services/Services";
import { Request, Response } from "express";

export default async function (req: Request, res: Response) {
  try {
    const data = req.body;
    const info: { cat_ref: string; image: any } = {
      cat_ref: data?.cat_ref,
      image: await WriteBase64File(data?.image.data, data?.cat_ref + uuidv4()),
    };
    await AddDisplayCat(info);
    res.send({
      data: await GetDisplayCats(),
      message: "Data Added Succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
