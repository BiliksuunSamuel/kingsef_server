import { rejects } from "assert";
import { CategoryModel } from "../model/productsModel";

export function GetCategories() {
  return new Promise(function (resolve, reject) {
    try {
      CategoryModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      rejects(error);
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
