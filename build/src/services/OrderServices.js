"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderInfo = exports.GetOrders = exports.AddOrder = void 0;
const Model_1 = require("../model/Model");
function AddOrder(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new Model_1.OrderModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddOrder = AddOrder;
function GetOrders() {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.OrderModel.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetOrders = GetOrders;
function UpdateOrderInfo(data) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.OrderModel.updateOne({ _id: data.id }, {
                $set: Object.assign({}, data.info),
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
exports.UpdateOrderInfo = UpdateOrderInfo;
