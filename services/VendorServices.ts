import moment from "moment";
import { VendorInfoModel } from "../model/VendorModel";

//add vendor
export function AddVendor(info) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new VendorInfoModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

//get vendor by email
export function GetVendorByEmail(info: { email: string }) {
  return new Promise(function (resolve, reject) {
    try {
      VendorInfoModel.findOne(
        { "info.email": info.email },
        (error, results) => {
          error && reject(error);
          resolve(results);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

///approve vendor account
export function ApproveAccount(info: { id: string }) {
  return new Promise(function (resolve, reject) {
    try {
      VendorInfoModel.updateOne(
        { _id: info.id },
        { $set: { "account.status": 1 } },
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

///get all vendors
export function GetVendors() {
  return new Promise(function (resolve, reject) {
    try {
      VendorInfoModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

/// otp approved
export function OTPApproved(info: { email: string }) {
  console.log(info);
  return new Promise(function (resolve, reject) {
    try {
      VendorInfoModel.updateOne(
        { "info.email": info.email },
        { $set: { "info.authenticated": true } },
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

//resend otp
export function ResendOTP(email) {
  return new Promise(function (resolve, reject) {
    try {
      VendorInfoModel.updateOne(
        { "info.email": email },
        {
          $set: {
            "info.otp_expiresIn": moment().add(15, "minutes").format(),
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
