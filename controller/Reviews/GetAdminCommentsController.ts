import { GetAdminComments } from "../../services/ReviewServices";

export default async function GetAdminCommentsController(req, res) {
  try {
    res.send(await GetAdminComments());
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
