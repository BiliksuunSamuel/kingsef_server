import { v4 as uuidv4 } from "uuid";
import { WriteBase64File } from "../../functions/Functions";
import { AddAdvert, GetAdverts } from "../../services/Services";
import { Request, Response } from "express";

export default async function AddAdvertController(req: Request, res: Response) {
  try {
    const data: {
      image: any;
      path: string;
      access: {
        id: string;
        ref: string;
      };
    } = req.body;
    const advert_info: { path: string; access: { id: string; ref: string } } = {
      path: "",
      access: data.access,
    };
    const filename = <any>await WriteBase64File(data.image?.data, uuidv4());
    advert_info.path = filename;
    await AddAdvert(advert_info);

    res.send({
      message: "Advertisement Added Successfull",
      data: await GetAdverts(),
    });
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
