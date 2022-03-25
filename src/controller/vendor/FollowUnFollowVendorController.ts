import {
  FollowUnfollowVendor,
  GetVendors,
} from "../../services/VendorServices";

export default async function (req, res) {
  try {
    const info: { id: string; followers: string[] } = req.body;
    await FollowUnfollowVendor(info);
    res.send(await GetVendors());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
