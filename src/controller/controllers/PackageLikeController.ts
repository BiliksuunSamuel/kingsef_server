import { GetPackages, PackageLike } from "../../services/Services";

export default async function (req, res) {
  try {
    const info = req.body;
    await PackageLike(info);
    await GetPackages();
    res.send(await GetPackages());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
