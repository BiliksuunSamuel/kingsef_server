import { GetReviews } from "../../services/Services";

export default async function (_, res) {
  try {
    res.send(await GetReviews());
  } catch (error) {
    console.log(error);
    res.status(404).send("Sever Network Error");
  }
}
