import { IAdminComments } from "../interface/IModel";
import { AdminCommentsModel } from "../model/Model";

export function AddAdminComment(info: IAdminComments) {
  return new Promise((resolve, reject) => {
    try {
      const Info = new AdminCommentsModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetAdminComments() {
  return new Promise((resolve, reject) => {
    try {
      AdminCommentsModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function RemoveAdminComment(info: { id: string }) {
  return new Promise(function (resolve, reject) {
    try {
      AdminCommentsModel.deleteOne({ _id: info.id }, (error) => {
        error && reject(error);
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function UpdateAdminCommentsSeend(info: { id: string }) {
  return new Promise(function (resolve, reject) {
    try {
      AdminCommentsModel.updateOne(
        { _id: info.id },
        { $addToSet: { seen: info.id } }
      );
    } catch (error) {
      reject(error);
    }
  });
}
