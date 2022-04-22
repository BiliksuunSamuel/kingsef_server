import { Request, Response } from "express";
import { UpdateAdminPost } from "../../services/ManagementServices";

export default async function (req: Request, res: Response) {
  try {
    const data: any = req.body;
    await UpdateAdminPost(data, data?._id);
    res.send("Post Updated Successfully");
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
