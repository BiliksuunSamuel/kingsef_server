"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePackagingOrderInfo = exports.GetDebitsPayments = exports.AddDebitPayment = exports.DeleteHelpCenterMessage = exports.UpdateChatMessageSeen = exports.GetHelpCenterChats = exports.SaveHelpCenterChat = exports.PackageFavorites = exports.PackageLike = exports.GetPackageById = exports.UpdatePackageQuantity = exports.GetPackageOrders = exports.AddPackageOrder = exports.GetPackages = exports.AddPackage = exports.UpdateDisplayCat = exports.GetDisplayCatById = exports.GetDisplayCats = exports.AddDisplayCat = exports.GetReviews = exports.AddReview = exports.GetAdverts = exports.AddAdvert = exports.AddNotification = exports.GetDeliveryPricingByISOCode = exports.GetDeliveryPricings = exports.UpdateDisplayCatInfo = exports.AddDeliveryPricing = void 0;
const Model_1 = require("../model/Model");
function AddDeliveryPricing(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new Model_1.DeliveryPricingModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddDeliveryPricing = AddDeliveryPricing;
function UpdateDisplayCatInfo(id, info) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.DisplayCatModel.updateOne({ _id: id }, { $set: Object.assign({}, info) }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UpdateDisplayCatInfo = UpdateDisplayCatInfo;
function GetDeliveryPricings() {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.DeliveryPricingModel.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetDeliveryPricings = GetDeliveryPricings;
function GetDeliveryPricingByISOCode(info) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.DeliveryPricingModel.findOne({ "state_city.isoCode": info.isoCode }, (errr, results) => {
                errr && reject(errr);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetDeliveryPricingByISOCode = GetDeliveryPricingByISOCode;
function AddNotification(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new Model_1.NotificationModel(info);
            Info.save();
            resolve(true);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddNotification = AddNotification;
function AddAdvert(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new Model_1.AdvertModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddAdvert = AddAdvert;
function GetAdverts() {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.AdvertModel.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetAdverts = GetAdverts;
function AddReview(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new Model_1.ReviewsModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddReview = AddReview;
function GetReviews() {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.ReviewsModel.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetReviews = GetReviews;
function AddDisplayCat(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new Model_1.DisplayCatModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddDisplayCat = AddDisplayCat;
function GetDisplayCats() {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.DisplayCatModel.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetDisplayCats = GetDisplayCats;
function GetDisplayCatById(info) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.DisplayCatModel.findOne({ _id: info.id }, (error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetDisplayCatById = GetDisplayCatById;
function UpdateDisplayCat(info) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.DisplayCatModel.updateOne({ _id: info.id }, { $set: { image: info.image } }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UpdateDisplayCat = UpdateDisplayCat;
function AddPackage(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new Model_1.PackageModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddPackage = AddPackage;
function GetPackages() {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.PackageModel.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetPackages = GetPackages;
function AddPackageOrder(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new Model_1.PackageOrderModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddPackageOrder = AddPackageOrder;
function GetPackageOrders() {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.PackageOrderModel.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetPackageOrders = GetPackageOrders;
function UpdatePackageQuantity(info) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.PackageModel.updateOne({ _id: info.id }, { $set: { quantity: info.qnt } }, (error) => {
                error && resolve(error);
                resolve(true);
                reject(error);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UpdatePackageQuantity = UpdatePackageQuantity;
function GetPackageById(id) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.PackageModel.findOne({ _id: id }, (error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetPackageById = GetPackageById;
function PackageLike(info) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.PackageModel.updateOne({ _id: info.id }, {
                $set: {
                    likes: info.likes,
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
exports.PackageLike = PackageLike;
function PackageFavorites(info) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.PackageModel.updateOne({ _id: info.id }, {
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
exports.PackageFavorites = PackageFavorites;
function SaveHelpCenterChat(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new Model_1.HelpCenterChatModel(info);
            Info.save(resolve(Info));
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.SaveHelpCenterChat = SaveHelpCenterChat;
function GetHelpCenterChats() {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.HelpCenterChatModel.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetHelpCenterChats = GetHelpCenterChats;
function UpdateChatMessageSeen(info) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.HelpCenterChatModel.updateOne({ chat_id: info.chat_id }, { $addToSet: { seen: info.myId } }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UpdateChatMessageSeen = UpdateChatMessageSeen;
function DeleteHelpCenterMessage(info) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.HelpCenterChatModel.updateOne({ _id: info.id }, {
                $set: {
                    deleted: true,
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
exports.DeleteHelpCenterMessage = DeleteHelpCenterMessage;
function AddDebitPayment(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new Model_1.DebitsPaymentsModel(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddDebitPayment = AddDebitPayment;
function GetDebitsPayments() {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.DebitsPaymentsModel.find((error, payments) => {
                error && reject(error);
                resolve(payments);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetDebitsPayments = GetDebitsPayments;
function UpdatePackagingOrderInfo(info, id) {
    return new Promise(function (resolve, reject) {
        try {
            Model_1.PackageOrderModel.updateOne({ _id: id }, { $set: Object.assign({}, info) }, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UpdatePackagingOrderInfo = UpdatePackagingOrderInfo;
