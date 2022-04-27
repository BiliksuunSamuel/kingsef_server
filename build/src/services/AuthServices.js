"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OTPAccepted = exports.ResendOTP = exports.UpdateAuthPassword = exports.UpdateAuthInfo = exports.VerifyOTP = exports.RegisterAuthInfo = exports.GetAuthByEmail = exports.UpdateAccountPassword = exports.UpdateAccountOTP = exports.GetAuthById = void 0;
const AuthModel_1 = require("../model/AuthModel");
///GET AUTH BY ID
function GetAuthById(id) {
    return new Promise(function (resolve, reject) {
        try {
            AuthModel_1.AuthModel.findById({ _id: id }, (error, results) => {
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
exports.GetAuthById = GetAuthById;
//UPDATE OTP
function UpdateAccountOTP(info) {
    return new Promise(function (resolve, reject) {
        try {
            AuthModel_1.AuthModel.updateOne({ _id: info.id }, { $set: { "otp.code": info.otp } }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UpdateAccountOTP = UpdateAccountOTP;
///UPDATE ACCOUNT PASSWORD
function UpdateAccountPassword(info) {
    return new Promise(function (resolve, reject) {
        try {
            AuthModel_1.AuthModel.updateOne({ _id: info.id }, { $set: { password: info.password } }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UpdateAccountPassword = UpdateAccountPassword;
///GET AUTH BY EMAIL
function GetAuthByEmail(info) {
    return new Promise(function (resolve, reject) {
        try {
            AuthModel_1.AuthModel.findById({ email: info.email }, (error, results) => {
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
exports.GetAuthByEmail = GetAuthByEmail;
///REGISTER AUTH INFO
function RegisterAuthInfo(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new AuthModel_1.AuthModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.RegisterAuthInfo = RegisterAuthInfo;
///VERIFY OTP
function VerifyOTP(info) {
    return new Promise(function (resolve, reject) {
        try {
            AuthModel_1.AuthModel.updateOne({ _id: info.id }, { $set: { "otp.status": 1 } }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.VerifyOTP = VerifyOTP;
//UPDATE AUTH INFO
function UpdateAuthInfo(info) {
    return new Promise((resolve, reject) => {
        try {
            AuthModel_1.AuthModel.updateOne({ _id: info.id }, { $set: { email: info.email } }, (error) => {
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
exports.UpdateAuthInfo = UpdateAuthInfo;
//UPDATE AUTH PASSWORD
function UpdateAuthPassword(info) {
    return new Promise((resolve, reject) => {
        try {
            AuthModel_1.AuthModel.updateOne({ _id: info.id }, { $set: { password: info.password } }, (error) => {
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
exports.UpdateAuthPassword = UpdateAuthPassword;
function ResendOTP(info) {
    return new Promise(function (resolve, reject) {
        try {
            AuthModel_1.AuthModel.updateOne({ _id: info.id }, {
                $set: {
                    "otp.code": info.otp,
                    "otp.status": 0,
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
function OTPAccepted(info) {
    return new Promise(function (resolve, reject) {
        try {
            AuthModel_1.AuthModel.updateOne({ _id: info.id }, {
                $set: {
                    "otp.status": 1,
                    authenticated: true,
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
exports.OTPAccepted = OTPAccepted;
