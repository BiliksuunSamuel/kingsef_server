import { WriteBase64File } from "../../functions/functions";
import { PrepareNewProductInfo } from "../../utilities/FormatRequest";

export default async function (req, res) {
  try {
    const data: any[] = req.body;
    let Images: any[] = [];
    data.forEach((dat) => {
      const content = dat[0];
      let ProductInfo = PrepareNewProductInfo(content);
      content.images.forEach(async (el) => {
        let res: any = await WriteBase64File(el.data, "7704", Images);
        console.log(res);
      });
      console.log(Images.length);
    });
    res.status(404).send("Got the details");
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
