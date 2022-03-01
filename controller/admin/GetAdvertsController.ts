import { GetAdverts } from "../../services/Services";

export default async function GetAdvertsController(_, res) {
  try {
    const results = await GetAdverts();
    res.send(results);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
