import { Request, Response } from "express";
import { RemoveFileFromDir } from "../../functions/Functions";
import { IDisplayCat } from "../../interface/IModel";
import { DeleteDisplayCatInfo, GetDisplayCats } from "../../services/Services";

export default async function (req: Request, res: Response) {
  try {
    const info: IDisplayCat = req.body;
    await RemoveFileFromDir(info.image);
    await DeleteDisplayCatInfo(info._id);
    res.send({
      data: await GetDisplayCats(),
      message: "Display Category Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
