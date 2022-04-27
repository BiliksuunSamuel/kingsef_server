"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountInfo = exports.GetVendorById = exports.UpdateProfile = exports.FollowUnfollowVendor = exports.RateVendor = exports.AccountStatus = exports.ResendOTP = exports.OTPApproved = exports.GetVendors = exports.ApproveAccount = exports.GetVendorByEmail = exports.AddVendor = void 0;
const moment_1 = __importDefault(require("moment"));
const VendorModel_1 = require("../model/VendorModel");
//add vendor
function AddVendor(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new VendorModel_1.VendorInfoModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddVendor = AddVendor;
//get vendor by email
function GetVendorByEmail(info) {
    return new Promise(function (resolve, reject) {
        try {
            VendorModel_1.VendorInfoModel.findOne({ "info.email": info.email }, (error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetVendorByEmail = GetVendorByEmail;
///approve vendor account
function ApproveAccount(info) {
    return new Promise(function (resolve, reject) {
        try {
            VendorModel_1.VendorInfoModel.updateOne({ _id: info.id }, { $set: { "account.status": 1 } }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.ApproveAccount = ApproveAccount;
///get all vendors
function GetVendors() {
    return new Promise(function (resolve, reject) {
        try {
            VendorModel_1.VendorInfoModel.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetVendors = GetVendors;
/// otp approved
function OTPApproved(info) {
    console.log(info);
    return new Promise(function (resolve, reject) {
        try {
            VendorModel_1.VendorInfoModel.updateOne({ "info.email": info.email }, { $set: { "info.authenticated": true } }, (error) => {
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
            VendorModel_1.VendorInfoModel.updateOne({ "info.email": email }, {
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
function AccountStatus(info, id) {
    return new Promise(function (resolve, reject) {
        try {
            VendorModel_1.VendorInfoModel.updateOne({ _id: id }, { $set: Object.assign({}, info) }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AccountStatus = AccountStatus;
function RateVendor(info) {
    return new Promise(function (resolve, reject) {
        try {
            VendorModel_1.VendorInfoModel.updateOne({ _id: info.id }, {
                $set: {
                    "info.ratings": info.rate,
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
exports.RateVendor = RateVendor;
function FollowUnfollowVendor(info) {
    return new Promise(function (resolve, reject) {
        try {
            VendorModel_1.VendorInfoModel.updateOne({ _id: info.id }, {
                $set: {
                    "info.followers": info.followers,
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
exports.FollowUnfollowVendor = FollowUnfollowVendor;
function UpdateProfile(info, id) {
    return new Promise(function (resolve, reject) {
        try {
            VendorModel_1.VendorInfoModel.updateOne({ _id: id }, { $set: Object.assign({}, info) }, (error) => {
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
function GetVendorById(id) {
    return new Promise(function (resolve, reject) {
        try {
            VendorModel_1.VendorInfoModel.findOne({ _id: id }, (error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetVendorById = GetVendorById;
function UpdateAccountInfo(info, id) {
    return new Promise(function (resolve, reject) {
        try {
            VendorModel_1.VendorInfoModel.updateOne({ _id: id }, { $set: Object.assign({}, info) }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UpdateAccountInfo = UpdateAccountInfo;
