import { WriteBase64File } from "../../functions/Functions";
import { INewProductInfo } from "../../interface/IProduct";
import { PrepareNewProductInfo } from "../../utilities/FormatRequest";
import { v4 as uuid } from "uuid";
import { AddNewProduct } from "../../services/ProductServices";
import { Request, Response } from "express";
export default async function (req: Request, res: Response) {
  try {
    const data: INewProductInfo[] = req.body;
    for (let i = 0; i < data.length; i++) {
      const imagesContainer: any[] = [];
      let product = data[i];
      for (let j = 0; j < product.gallery.length; j++) {
        imagesContainer.push(
          await WriteBase64File(product.gallery[j]?.data, uuid())
        );
      }
      const pimage: any = await WriteBase64File(product.image?.base64, uuid());
      const productInfo = PrepareNewProductInfo(
        product,
        pimage,
        imagesContainer
      );
      await AddNewProduct(productInfo);
    }
    res.send("Product Uploaded Sucessfully");
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
