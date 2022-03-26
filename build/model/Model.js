"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.HelpCenterChatModel = exports.AdminCommentsModel = exports.PackageOrderModel = exports.PackageModel = exports.DisplayCatModel = exports.ReviewsModel = exports.AdvertModel = exports.NotificationModel = exports.DeliveryPricingModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema_1 = require("../schema/Schema");
exports.DeliveryPricingModel = mongoose_1.default.model("delivery_pricing", Schema_1.DeliverPricingSchema);
exports.NotificationModel = mongoose_1.default.model("notification", Schema_1.NotificationSchema);
exports.AdvertModel = mongoose_1.default.model("advert", Schema_1.AdvertSchema);
exports.ReviewsModel = mongoose_1.default.model("review", Schema_1.ReviewsSchema);
exports.DisplayCatModel = mongoose_1.default.model("display_cat", Schema_1.DisplayCatSchema);
exports.PackageModel = mongoose_1.default.model("package", Schema_1.PackageSchema);
exports.PackageOrderModel = mongoose_1.default.model("package_order", Schema_1.PackageOrderSchema);
exports.AdminCommentsModel = mongoose_1.default.model("admin_comment", Schema_1.AdminCommentsSchema);
exports.HelpCenterChatModel = mongoose_1.default.model("help_center_chat", Schema_1.HelpCenterChatSchema);
exports.OrderModel = mongoose_1.default.model("order", Schema_1.OrderSchema);
