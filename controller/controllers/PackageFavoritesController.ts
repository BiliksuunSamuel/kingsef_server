import { GetPackages, PackageFavorites } from "../../services/Services";

export default async function (req, res) {
  try {
    const info = req.body;
    await PackageFavorites(info);
    res.send(await GetPackages());
  } catch (error) {
    console.log(error);
  }
}
