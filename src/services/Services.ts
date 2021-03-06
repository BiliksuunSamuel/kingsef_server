import { IDebitPaymentInfo } from "../interface/IDebitsPaymentInfo";
import { IDisplayCat, IPackageOrder } from "../interface/IModel";
import {
  AdvertModel,
  DebitsPaymentsModel,
  DeliveryPricingModel,
  DisplayCatModel,
  HelpCenterChatModel,
  NotificationModel,
  PackageModel,
  PackageOrderModel,
  ReviewsModel,
} from "../model/Model";

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

export function UpdateDisplayCatInfo(id: string, info: any) {
  return new Promise(function (resolve, reject) {
    try {
      DisplayCatModel.updateOne({ _id: id }, { $set: { ...info } }, (error) => {
        error && reject(error);
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function DeleteDisplayCatInfo(id: string) {
  return new Promise(function (resolve, reject) {
    try {
      DisplayCatModel.deleteOne({ _id: id }, (error) => {
        error && reject(error);
        resolve(true);
      });
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

export function AddNotification(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new NotificationModel(info);
      Info.save();
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}

export function AddAdvert(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new AdvertModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetAdverts() {
  return new Promise(function (resolve, reject) {
    try {
      AdvertModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function AddReview(info) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new ReviewsModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetReviews() {
  return new Promise(function (resolve, reject) {
    try {
      ReviewsModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function AddDisplayCat(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new DisplayCatModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetDisplayCats() {
  return new Promise(function (resolve, reject) {
    try {
      DisplayCatModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function GetDisplayCatById(info: { id: string }) {
  return new Promise(function (resolve, reject) {
    try {
      DisplayCatModel.findOne({ _id: info.id }, (error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function UpdateDisplayCat(info: { id: string; image: string }) {
  return new Promise(function (resolve, reject) {
    try {
      DisplayCatModel.updateOne(
        { _id: info.id },
        { $set: { image: info.image } },
        (error) => {
          error && reject(error);
          resolve(true);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

export function AddPackage(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new PackageModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetPackages() {
  return new Promise(function (resolve, reject) {
    try {
      PackageModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function AddPackageOrder(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new PackageOrderModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetPackageOrders() {
  return new Promise(function (resolve, reject) {
    try {
      PackageOrderModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function UpdatePackageQuantity(info: { id: string; qnt: number }) {
  return new Promise(function (resolve, reject) {
    try {
      PackageModel.updateOne(
        { _id: info.id },
        { $set: { quantity: info.qnt } },
        (error) => {
          error && resolve(error);
          resolve(true);
          reject(error);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

export function GetPackageById(id: string) {
  return new Promise(function (resolve, reject) {
    try {
      PackageModel.findOne({ _id: id }, (error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function PackageLike(info: { id: string; likes: string[] }) {
  return new Promise(function (resolve, reject) {
    try {
      PackageModel.updateOne(
        { _id: info.id },
        {
          $set: {
            likes: info.likes,
          },
        },
        (error) => {
          error && reject(error);
          resolve(true);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

export function PackageFavorites(info: { id: string; favorites: string[] }) {
  return new Promise(function (resolve, reject) {
    try {
      PackageModel.updateOne(
        { _id: info.id },
        {
          $set: {
            favorites: info.favorites,
          },
        },
        (error) => {
          error && reject(error);
          resolve(true);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

export function SaveHelpCenterChat(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new HelpCenterChatModel(info);
      Info.save(resolve(Info));
    } catch (error) {
      reject(error);
    }
  });
}

export function GetHelpCenterChats() {
  return new Promise(function (resolve, reject) {
    try {
      HelpCenterChatModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function UpdateChatMessageSeen(info: { chat_id: string; myId: string }) {
  return new Promise(function (resolve, reject) {
    try {
      HelpCenterChatModel.updateOne(
        { chat_id: info.chat_id },
        { $addToSet: { seen: info.myId } },
        (error) => {
          error && reject(error);
          resolve(true);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

export function DeleteHelpCenterMessage(info: { id: string }) {
  return new Promise(function (resolve, reject) {
    try {
      HelpCenterChatModel.updateOne(
        { _id: info.id },
        {
          $set: {
            deleted: true,
          },
        },
        (error) => {
          error && reject(error);
          resolve(true);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

export function AddDebitPayment(info: IDebitPaymentInfo) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new DebitsPaymentsModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetDebitsPayments() {
  return new Promise(function (resolve, reject) {
    try {
      DebitsPaymentsModel.find((error, payments) => {
        error && reject(error);
        resolve(payments);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function UpdatePackagingOrderInfo(info: IPackageOrder, id: string) {
  return new Promise(function (resolve, reject) {
    try {
      PackageOrderModel.updateOne(
        { _id: id },
        { $set: { ...info } },
        (error) => {
          error && reject(error);
          resolve(true);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}
