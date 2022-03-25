import moment from "moment";
import { IPackageModel, IPackageOrder } from "../../interface/IModel";
import {
  AddPackageOrder,
  GetPackageById,
  UpdatePackageQuantity,
} from "../../services/Services";

export default async function (req, res) {
  try {
    const info: IPackageOrder = req.body;
    const Info = {
      ...info,
      date_ordered: moment().format(),
      status: { processed: 0, approved: false, declined: false },
    };
    for (let i = 0; i < info.items.length; i++) {
      const item = info.items[i];
      const pack = <IPackageModel | undefined>await GetPackageById(item.id);
      if (pack) {
        await UpdatePackageQuantity({
          id: item.id,
          qnt: pack.quantity - item.qnt,
        });
      }
    }
    await AddPackageOrder(Info);
    res.send("Order Placed Sucessfully,Awaiting Approval");
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}
