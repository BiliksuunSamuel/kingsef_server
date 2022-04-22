import moment from "moment";
import { IVendorInfo } from "../interface/IVendor";
import { IVendorAccountInfo } from "../interface/IVendorModel";
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

export function AccountStatus(info: IVendorAccountInfo, id: string) {
  return new Promise(function (resolve, reject) {
    try {
      VendorInfoModel.updateOne({ _id: id }, { $set: { ...info } }, (error) => {
        error && reject(error);
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function RateVendor(info: { id: string; rate: any }) {
  return new Promise(function (resolve, reject) {
    try {
      VendorInfoModel.updateOne(
        { _id: info.id },
        {
          $set: {
            "info.ratings": info.rate,
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

export function FollowUnfollowVendor(info: {
  id: string;
  followers: string[];
}) {
  return new Promise(function (resolve, reject) {
    try {
      VendorInfoModel.updateOne(
        { _id: info.id },
        {
          $set: {
            "info.followers": info.followers,
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

export function UpdateProfile(info: IVendorInfo, id: string) {
  return new Promise(function (resolve, reject) {
    try {
      VendorInfoModel.updateOne({ _id: id }, { $set: { ...info } }, (error) => {
        error && reject(error);
        resolve(true);
      });
    } catch (error) {
      console.log(error);
    }
  });
}

export function GetVendorById(id: string) {
  return new Promise(function (resolve, reject) {
    try {
      VendorInfoModel.findOne({ _id: id }, (error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function UpdateAccountInfo(info: IVendorInfo, id: string) {
  return new Promise(function (resolve, reject) {
    try {
      VendorInfoModel.updateOne({ _id: id }, { $set: { ...info } }, (error) => {
        error && reject(error);
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });
}
