import { VerificationModel } from "../model/VerificationModel";

///ADD USER VERIFICATION DETAILS
export function AddVerification(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new VerificationModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

///GET USER VERIFICATION BY ID
export function GetVerificationById(id: string) {
  return new Promise((resolve, reject) => {
    try {
      VerificationModel.findById({ _id: id }, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}
