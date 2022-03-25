import { GetUsers } from "../../services/UserServices";

export default async function (_, res) {
  try {
    res.send(await GetUsers());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
