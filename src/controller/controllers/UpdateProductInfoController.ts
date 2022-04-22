import { Request, Response } from "express";
import { RemoveFileFromDir, WriteBase64File } from "../../functions/Functions";
import { IProductInfo } from "../../interface/IProduct";
import { v4 as uuid } from "uuid";
import { UpdateProductInfo } from "../../services/ProductServices";
export default async function (req: Request, res: Response) {
  try {
    const data: { info: any; Images: { image: any; gallery: any[] } } =
      req.body;

    const imagesContainer: any[] = [];

    if (data.Images.gallery.length > 0) {
      for (let j = 0; j < data.Images.gallery.length; j++) {
        imagesContainer.push(
          await WriteBase64File(data.Images.gallery[j]?.data, uuid())
        );
      }
      for (let i = 0; i < data.info.gallery.length; i++) {
        await RemoveFileFromDir(data.info.gallery[i]);
      }
      data.info.gallery = imagesContainer;
    }
    if (data.Images.image) {
      const pimage: any = await WriteBase64File(
        data.Images.image?.data,
        uuid()
      );
      await RemoveFileFromDir(data.info.image);
      data.info.image = pimage;
    }
    await UpdateProductInfo(data.info, data.info?._id);
    res.send("Product Updated Sucessfully");
  } catch (error) {
    console.log(error);
    res.status(404).send("server network error");
  }
}
