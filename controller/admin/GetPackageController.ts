import { GetPackages } from "../../services/Services";

export default async function (_, res) {
  try {
    res.send(await GetPackages());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
