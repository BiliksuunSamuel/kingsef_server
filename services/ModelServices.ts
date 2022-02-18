//add new merit

import MeritModel from "../model/MeritModel";

export function AddMerit(info) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new MeritModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

//get all the merits
export function GetMerits() {
  return new Promise((resolve, reject) => {
    try {
      MeritModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}
