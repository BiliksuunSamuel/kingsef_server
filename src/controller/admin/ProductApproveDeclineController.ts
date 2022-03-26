import moment from "moment";
import { INotificationInfo } from "../../interface/IModel";
import {
  ApproveProduct,
  DeclineProduct,
  GetProducts,
} from "../../services/ProductServices";
import { AddNotification } from "../../services/Services";

export default async function ProductApproveDeclineController(req, res) {
  try {
    const info = req.body;
    if (info.approve) {
      await ApproveProduct({ id: info.id, merit: info.merit });
      return res.send({
        data: await GetProducts(),
        message: "Product Approved",
      });
    } else if (info.decline) {
      const Note: INotificationInfo = {
        sender: { isAdmin: true, id: info.sender },
        receiver: info.receiver,
        message: info.message,
        reference: { title: "product_decline", id: info.id },
        date: moment().format(),
        status: { seen: false },
        subject: "Product Declined",
      };
      await AddNotification(Note);
      await DeclineProduct({ id: info.id });
      return res.send({
        data: await GetProducts(),
        message: "Product Declined",
      });
    } else {
      return res.send({ data: await GetProducts(), message: null });
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
