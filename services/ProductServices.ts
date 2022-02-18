import { CategoryModel, ProductInfoModel } from "../model/productsModel";

export function GetCategories() {
  return new Promise(function (resolve, reject) {
    try {
      CategoryModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function AddCategory(info) {
  return new Promise(async function (resolve, reject) {
    try {
      const Info = new CategoryModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

///Add new product
export function AddNewProduct(info) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new ProductInfoModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

///get all products
export function GetProducts() {
  return new Promise(function (resolve, reject) {
    try {
      ProductInfoModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}
