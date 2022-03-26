"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdminCommentsSeend = exports.RemoveAdminComment = exports.GetAdminComments = exports.AddAdminComment = void 0;
const Model_1 = require("../model/Model");
function AddAdminComment(info) {
    return new Promise((resolve, reject) => {
        try {
            const Info = new Model_1.AdminCommentsModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddAdminComment = AddAdminComment;
function GetAdminComments() {
    return new Promise((resolve, reject) => {
        try {
            Model_1.AdminCommentsModel.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetAdminComments = GetAdminComments;
function RemoveAdminComment(info) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.AdminCommentsModel.deleteOne({ _id: info.id }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.RemoveAdminComment = RemoveAdminComment;
function UpdateAdminCommentsSeend(info) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.AdminCommentsModel.updateOne({ _id: info.id }, { $addToSet: { seen: info.id } });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UpdateAdminCommentsSeend = UpdateAdminCommentsSeend;
