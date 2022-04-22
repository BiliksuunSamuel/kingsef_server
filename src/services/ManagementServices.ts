import { IAdminComments } from "../interface/IModel";
import { AdminCommentsModel, AdvertModel } from "../model/Model";
import { CategoryModel } from "../model/productsModel";

export function DeleteProductCategory(id: string) {
  return new Promise(function (resolve, reject) {
    try {
      CategoryModel.deleteOne({ _id: id }, (error) => {
        error && reject(error);
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function UpdateProductCategory(info: any, id: string) {
  return new Promise(function (resolve, reject) {
    try {
      CategoryModel.updateOne({ _id: id }, { $set: { ...info } }, (error) => {
        error && reject(error);
        resolve(true);
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

export function UpdateAdvertisement(info: any, id: string) {
  return new Promise(function (resolve, reject) {
    try {
      AdvertModel.updateOne({ _id: id }, { $set: { ...info } }, (error) => {
        error && reject(error);
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function DeleteAdvertisement(id: string) {
  return new Promise(function (resolve, reject) {
    try {
      AdvertModel.deleteOne({ _id: id }, (error) => {
        error && reject(error);
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function DeleteAdminPost(id: string) {
  return new Promise(function (resolve, reject) {
    try {
      AdminCommentsModel.deleteOne({ _id: id }, (error) => {
        error && reject(error);
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function UpdateAdminPost(info: IAdminComments, id: string) {
  return new Promise(function (resolve, reject) {
    try {
      AdminCommentsModel.updateOne(
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
