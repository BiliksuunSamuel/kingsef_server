"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfile = exports.ResendOTP = exports.OTPApproved = exports.UpdateUserInfo = exports.RegisterUser = exports.GetUsers = exports.GetUserByEmail = exports.GetUserById = void 0;
const moment_1 = __importDefault(require("moment"));
const UserModel_1 = require("../model/UserModel");
///GET USER BY ID
function GetUserById(id) {
    return new Promise(function (resolve, reject) {
        try {
            UserModel_1.UserModel.findById({ _id: id }, (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetUserById = GetUserById;
///GET USER BY PHONE
function GetUserByEmail(email) {
    return new Promise(function (resolve, reject) {
        try {
            UserModel_1.UserModel.findOne({ "info.email": email }, (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetUserByEmail = GetUserByEmail;
//GET ALL USERS
function GetUsers() {
    return new Promise((resolve, reject) => {
        try {
            UserModel_1.UserModel.find((error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetUsers = GetUsers;
//USER REGISTRATION
function RegisterUser(info) {
    return new Promise((resolve, reject) => {
        try {
            const User = new UserModel_1.UserModel(info);
            User.save();
            resolve(User);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.RegisterUser = RegisterUser;
///UPDATE USER INFO
function UpdateUserInfo(info) {
    return new Promise(function (resolve, reject) {
        try {
            UserModel_1.UserModel.updateOne({ _id: info.id }, { $set: { email: info.email } }, (error) => {
                if (error) {
                    reject(error);
                }
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UpdateUserInfo = UpdateUserInfo;
/// otp approved
function OTPApproved(info) {
    console.log(info);
    return new Promise(function (resolve, reject) {
        try {
            UserModel_1.UserModel.updateOne({ "info.email": info.email }, { $set: { "info.authenticated": true } }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.OTPApproved = OTPApproved;
//resend otp
function ResendOTP(email) {
    return new Promise(function (resolve, reject) {
        try {
            UserModel_1.UserModel.updateOne({ "info.email": email }, {
                $set: {
                    "info.otp_expiresIn": (0, moment_1.default)().add(15, "minutes").format(),
                },
            }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.ResendOTP = ResendOTP;
function UpdateProfile(info, id) {
    return new Promise(function (resolve, reject) {
        try {
            UserModel_1.UserModel.updateOne({ _id: id }, { $set: Object.assign({}, info) }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.UpdateProfile = UpdateProfile;
