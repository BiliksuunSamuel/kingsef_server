"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeProductFavorite = exports.DeclineProduct = exports.ApproveProduct = exports.GetProducts = exports.AddNewProduct = exports.AddCategory = exports.GetCategories = void 0;
const productsModel_1 = require("../model/productsModel");
function GetCategories() {
    return new Promise(function (resolve, reject) {
        try {
            productsModel_1.CategoryModel.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetCategories = GetCategories;
function AddCategory(info) {
    return new Promise(function (resolve, reject) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Info = new productsModel_1.CategoryModel(info);
                Info.save();
                resolve(Info);
            }
            catch (error) {
                reject(error);
            }
        });
    });
}
exports.AddCategory = AddCategory;
///Add new product
function AddNewProduct(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new productsModel_1.ProductInfoModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddNewProduct = AddNewProduct;
///get all products
function GetProducts() {
    return new Promise(function (resolve, reject) {
        try {
            productsModel_1.ProductInfoModel.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetProducts = GetProducts;
//APPROVE PRODUCT
function ApproveProduct(info) {
    return new Promise(function (resolve, reject) {
        try {
            productsModel_1.ProductInfoModel.updateOne({ _id: info.id }, {
                $set: {
                    "status.approved": true,
                    "status.processed": 1,
                    "status.declined": false,
                    merit: info.merit,
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
exports.ApproveProduct = ApproveProduct;
//DeCLINE PRODUCT
function DeclineProduct(info) {
    return new Promise(function (resolve, reject) {
        try {
            productsModel_1.ProductInfoModel.updateOne({ _id: info.id }, {
                $set: {
                    "status.approved": false,
                    "status.processed": 1,
                    "status.declined": true,
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
exports.DeclineProduct = DeclineProduct;
///MAKE PRODUCT FAVORITE
function MakeProductFavorite(info) {
    return new Promise(function (resolve, reject) {
        try {
            productsModel_1.ProductInfoModel.updateOne({ _id: info.id }, {
                $set: {
                    favorites: info.favorites,
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
exports.MakeProductFavorite = MakeProductFavorite;
