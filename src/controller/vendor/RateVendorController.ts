import { GetVendors, RateVendor } from "../../services/VendorServices";

export default async function RateVendorController(req, res) {
  try {
    const info: {
      id: string;
      raters: string[];
      values: { id: string; score: number }[];
    } = req.body;

    await RateVendor({
      id: info.id,
      rate: { raters: info.raters, values: info.values },
    });
    res.send({
      data: await GetVendors(),
      message: "Rating Submitted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
