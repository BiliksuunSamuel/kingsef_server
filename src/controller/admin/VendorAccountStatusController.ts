import { AccountStatus, GetVendors } from "../../services/VendorServices";

export default async function (req, res) {
  try {
    const data = req.body;
    await AccountStatus({ id: data?.id, status: data?.status });
    res.send(await GetVendors());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}