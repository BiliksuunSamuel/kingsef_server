import { UserModel } from "../model/UserModel";
import { TUpdateUserInfo } from "../types/UserTypes";

///GET USER BY ID
export function GetUserById(id: string) {
  return new Promise(function (resolve, reject) {
    try {
      UserModel.findById({ _id: id }, (error, results) => {
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

///GET USER BY PHONE
export function GetUserByEmail(email: string) {
  return new Promise(function (resolve, reject) {
    try {
      UserModel.findById({ email }, (error, results) => {
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

//GET ALL USERS
export function GetUsers() {
  return new Promise((resolve, reject) => {
    try {
      UserModel.find((error, results) => {
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

//USER REGISTRATION
export function RegisterUser(info: any) {
  return new Promise((resolve, reject) => {
    try {
      const User = new UserModel(info);
      User.save();
      resolve(User);
    } catch (error) {
      reject(error);
    }
  });
}

///UPDATE USER INFO
export function UpdateUserInfo(info: TUpdateUserInfo) {
  return new Promise(function (resolve, reject) {
    try {
      UserModel.updateOne(
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
