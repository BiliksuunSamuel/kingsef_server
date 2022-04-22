import { Request, Response } from "express";
import { DeleteAdminPost } from "../../services/ManagementServices";

export default async function (req: Request, res: Response) {
  try {
    const info: { id: string } = req.body;
    await DeleteAdminPost(info.id);
    res.send("Post Deleted Successfully");
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
