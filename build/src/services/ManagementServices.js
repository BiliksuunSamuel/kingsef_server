"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdminPost = exports.DeleteAdminPost = exports.DeleteAdvertisement = exports.UpdateAdvertisement = exports.UpdateProductCategory = exports.DeleteProductCategory = void 0;
const Model_1 = require("../model/Model");
const productsModel_1 = require("../model/productsModel");
function DeleteProductCategory(id) {
    return new Promise(function (resolve, reject) {
        try {
            productsModel_1.CategoryModel.deleteOne({ _id: id }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.DeleteProductCategory = DeleteProductCategory;
function UpdateProductCategory(info, id) {
    return new Promise(function (resolve, reject) {
        try {
            productsModel_1.CategoryModel.updateOne({ _id: id }, { $set: Object.assign({}, info) }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
}
exports.UpdateProductCategory = UpdateProductCategory;
function UpdateAdvertisement(info, id) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.AdvertModel.updateOne({ _id: id }, { $set: Object.assign({}, info) }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UpdateAdvertisement = UpdateAdvertisement;
function DeleteAdvertisement(id) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.AdvertModel.deleteOne({ _id: id }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.DeleteAdvertisement = DeleteAdvertisement;
function DeleteAdminPost(id) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.AdminCommentsModel.deleteOne({ _id: id }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.DeleteAdminPost = DeleteAdminPost;
function UpdateAdminPost(info, id) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.AdminCommentsModel.updateOne({ _id: id }, { $set: Object.assign({}, info) }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UpdateAdminPost = UpdateAdminPost;
