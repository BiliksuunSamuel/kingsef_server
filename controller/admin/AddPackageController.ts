import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { WriteBase64File } from "../../functions/functions";
import { AddPackage, GetPackages } from "../../services/Services";
export default async function AddPackageController(req, res) {
  try {
    const data = req.body;
    const Images: string[] = [];
    for (let i = 0; i < data.images.length; i++) {
      const val: any = data.images[i];
      Images.push(<any>await WriteBase64File(val.data, uuidv4()));
    }
    const info = {
      ...data,
      images: Images,
      date_added: moment().format(),
      status: 1,
    };
    await AddPackage(info);
    res.send({
      message: "Packaging Item Added Succefully",
      data: await GetPackages(),
    });
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
