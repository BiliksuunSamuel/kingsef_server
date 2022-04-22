import { Request, Response } from "express";
import { RemoveFileFromDir, WriteBase64File } from "../../functions/Functions";
import { GetAdverts } from "../../services/Services";
import { v4 as uuidv4 } from "uuid";
import { UpdateAdvertisement } from "../../services/ManagementServices";
export interface IBanner {
  _id: string;
  path: string;
  access: {
    ref: string;
    id: string;
  };
}
export default async function (req: Request, res: Response) {
  try {
    const data: { oldInfo: IBanner; newInfo: { id: string; image: any } } =
      req.body;
    if (Boolean(data.newInfo.image)) {
      const newPath = <any>(
        await WriteBase64File(data.newInfo.image, uuidv4().toString())
      );
      await RemoveFileFromDir(data.oldInfo.path);
      data.oldInfo.path = newPath;
    }
    if (Boolean(data.newInfo.id)) {
      data.oldInfo.access.id = data.newInfo.id;
    }
    await UpdateAdvertisement(data.oldInfo, data.oldInfo._id);
    res.send({
      data: await GetAdverts(),
      message: "Advertisement Details Updated Successfully",
    });
  } catch (error) {
    console.log(error);
  }
}
