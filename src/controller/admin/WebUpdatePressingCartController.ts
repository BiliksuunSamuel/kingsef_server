import { Request, Response } from "express";
import { UploadWebFile } from "../../functions/WebFileUpload";
import { IDisplayCat } from "../../interface/IModel";
import { GetDisplayCats, UpdateDisplayCatInfo } from "../../services/Services";

export default async function (req: Request, res: Response) {
  try {
    const data = req.body;
    const files = req.files;
    const newpath = <string>await UploadWebFile(files?.file);
    const info = {
      cat_ref: data.ref,
      image: newpath,
    };
    await UpdateDisplayCatInfo(data.id, info);
    res.send({
      data: await GetDisplayCats(),
      message: "Data Received Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
