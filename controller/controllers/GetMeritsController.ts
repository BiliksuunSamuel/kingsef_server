import { GetMerits } from "../../services/ModelServices";

export default async function (_, res) {
  try {
    res.send(await GetMerits());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
