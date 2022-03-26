"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVerificationById = exports.AddVerification = void 0;
const VerificationModel_1 = require("../model/VerificationModel");
///ADD USER VERIFICATION DETAILS
function AddVerification(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new VerificationModel_1.VerificationModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddVerification = AddVerification;
///GET USER VERIFICATION BY ID
function GetVerificationById(id) {
    return new Promise((resolve, reject) => {
        try {
            VerificationModel_1.VerificationModel.findById({ _id: id }, (error, results) => {
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
exports.GetVerificationById = GetVerificationById;
