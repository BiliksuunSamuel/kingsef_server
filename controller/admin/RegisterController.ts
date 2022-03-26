import { Request, Response } from "express";

async function AdminRegister(req: Request, res: Response) {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}

export default AdminRegister;
