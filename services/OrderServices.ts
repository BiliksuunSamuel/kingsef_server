import { OrderModel, PackageOrderModel } from "../model/Model";

export function AddOrder(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new OrderModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetOrders() {
  return new Promise(function (resolve, reject) {
    try {
      OrderModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}
