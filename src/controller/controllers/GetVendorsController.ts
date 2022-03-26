import { Request, Response } from "express";
import { GetVendors } from "../../services/VendorServices";

export default async function GetVendorsController(
  req: Request,
  res: Response
) {
  try {
    const results = await GetVendors();
    res.send(results);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
