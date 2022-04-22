import { Request, Response } from "express";
import { RemoveFileFromDir } from "../../functions/Functions";
import { DeleteAdvertisement } from "../../services/ManagementServices";
import { GetAdverts } from "../../services/Services";

export default async function (req: Request, res: Response) {
  try {
    const info: { id: string; path: string } = req.body;
    await RemoveFileFromDir(info.path);
    await DeleteAdvertisement(info.id);
    res.send({
      data: await GetAdverts(),
      message: "Advertisement Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
