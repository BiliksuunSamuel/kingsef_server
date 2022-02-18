import { DeliveryPricingModel } from "../model/Model";

export function AddDeliveryPricing(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new DeliveryPricingModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetDeliveryPricings() {
  return new Promise(function (resolve, reject) {
    try {
      DeliveryPricingModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function GetDeliveryPricingByISOCode(info: { isoCode: string }) {
  return new Promise(function (resolve, reject) {
    try {
      DeliveryPricingModel.findOne(
        { "state_city.isoCode": info.isoCode },
        (errr, results) => {
          errr && reject(errr);
          resolve(results);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}
