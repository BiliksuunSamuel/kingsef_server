import { Request, Response } from "express";
import { IMerit } from "../../interface/IModel";
import { AddMerit, GetMerits } from "../../services/ModelServices";
export default async function (req: Request, res: Response) {
  try {
    const info: IMerit = req.body;
    await AddMerit({ title: info.title, value: info.value });
    res.send({ data: await GetMerits(), message: "Merit Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
