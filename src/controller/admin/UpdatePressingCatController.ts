import { WriteBase64File } from "../../functions/Functions";
import { v4 as uuidv4 } from "uuid";
import { UpdateDisplayCat, GetDisplayCats } from "../../services/Services";
export default async function (req, res) {
  try {
    const data = req.body;
    const info: { id: string; image: any } = {
      id: data?.id,
      image: await WriteBase64File(data?.image.data, data.id + uuidv4()),
    };
    await UpdateDisplayCat(info);
    res.send({ data: await GetDisplayCats(), message: "Update Successful" });
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
