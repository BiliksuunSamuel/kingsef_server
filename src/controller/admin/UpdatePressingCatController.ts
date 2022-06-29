import { RemoveFileFromDir, WriteBase64File } from "../../functions/Functions";
import { v4 as uuidv4 } from "uuid";
import {
  UpdateDisplayCat,
  GetDisplayCats,
  GetDisplayCatById,
} from "../../services/Services";
import { Request, Response } from "express";
export default async function (req: Request, res: Response) {
  try {
    const data = req.body;

    const Info: any = await GetDisplayCatById(data.id);
    if (Info) {
      RemoveFileFromDir(Info.image);
    }
    const info: { id: string; image: any } = {
      id: data?.id,
      image: data?.image
        ? await WriteBase64File(data?.image, data.id + uuidv4())
        : "",
    };
    await UpdateDisplayCat(info);
    res.send({ data: await GetDisplayCats(), message: "Update Successful" });
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
