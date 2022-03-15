import {
  AdvertModel,
  DeliveryPricingModel,
  DisplayCatModel,
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
