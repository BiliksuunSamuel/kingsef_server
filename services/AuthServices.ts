import { AuthModel } from "../model/AuthModel";
import { TUpdateAuthInfo, TUpdateAuthPassword } from "../types/AuthTypes";

///GET AUTH BY ID
export function GetAuthById(id: string) {
  return new Promise(function (resolve, reject) {
    try {
      AuthModel.findById({ _id: id }, (error, results) => {
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

///GET AUTH BY EMAIL
export function GetAuthByEmail(email: string) {
  return new Promise(function (resolve, reject) {
    try {
      AuthModel.findById({ email }, (error, results) => {
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

///REGISTER AUTH INFO
export function RegisterAuthInfo(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new AuthModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}
///VERIFY OTP

export function VerifyOTP(info: { id: string }) {
  return new Promise(function (resolve, reject) {
    try {
      AuthModel.updateOne(
        { _id: info.id },
        { $set: { "otp.status": 1 } },
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
//UPDATE AUTH INFO
export function UpdateAuthInfo(info: TUpdateAuthInfo) {
  return new Promise((resolve, reject) => {
    try {
      AuthModel.updateOne(
        { _id: info.id },
        { $set: { email: info.email } },
        (error) => {
          if (error) {
            reject(error);
          }
          resolve(true);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

//UPDATE AUTH PASSWORD
export function UpdateAuthPassword(info: TUpdateAuthPassword) {
  return new Promise((resolve, reject) => {
    try {
      AuthModel.updateOne(
        { _id: info.id },
        { $set: { password: info.password } },
        (error) => {
          if (error) {
            reject(error);
          }
          resolve(true);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

export function ResendOTP(info: { id: string; otp: string }) {
  return new Promise(function (resolve, reject) {
    try {
      AuthModel.updateOne(
        { _id: info.id },
        {
          $set: {
            "otp.code": info.otp,
            "otp.status": 0,
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

export function OTPAccepted(info: { id: string }) {
  return new Promise(function (resolve, reject) {
    try {
      AuthModel.updateOne(
        { _id: info.id },
        {
          $set: {
            "otp.status": 1,
            authenticated: true,
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
