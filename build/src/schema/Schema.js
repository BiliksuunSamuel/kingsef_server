"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = exports.HelpCenterChatSchema = exports.AdminCommentsSchema = exports.PackageOrderSchema = exports.PackageSchema = exports.DisplayCatSchema = exports.ReviewsSchema = exports.AdvertSchema = exports.NotificationSchema = exports.DeliverPricingSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.DeliverPricingSchema = new mongoose_1.default.Schema({
    state_city: Object,
    vendor_id: String,
    amount: Number,
    reason: String,
});
exports.NotificationSchema = new mongoose_1.default.Schema({
    subject: String,
    reference: Object,
    date: String,
    sender: Object,
    message: String,
    status: Object,
    receiver: String,
});
exports.AdvertSchema = new mongoose_1.default.Schema({
    path: String,
    access: Object,
});
exports.ReviewsSchema = new mongoose_1.default.Schema({
    message: String,
    date_added: String,
    sender: Object,
});
exports.DisplayCatSchema = new mongoose_1.default.Schema({
    cat_ref: String,
    image: String,
});
exports.PackageSchema = new mongoose_1.default.Schema({
    name: String,
    description: String,
    sale_price: Number,
    date_added: String,
    quantity: Number,
    status: Number,
    seller: String,
    images: Array,
    favorites: Array,
    likes: Array,
});
exports.PackageOrderSchema = new mongoose_1.default.Schema({
    items: Array,
    cost: Number,
    total: Number,
    vendor: String,
    group: Number,
    date_ordered: String,
    status: Object,
});
exports.AdminCommentsSchema = new mongoose_1.default.Schema({
    type: Number,
    receipient: Number,
    message: String,
    seen: Array,
    sender: String,
    date_added: String,
});
exports.HelpCenterChatSchema = new mongoose_1.default.Schema({
    message: String,
    seen: Array,
    time: String,
    copied_text: String,
    sender: String,
    receiver: String,
    deleted: Boolean,
    ref: String,
    chat_id: String,
    sent: Boolean,
    id: String,
});
exports.OrderSchema = new mongoose_1.default.Schema({
    date: String,
    amount: String,
    content: Array,
    buyer: String,
    buyer_response: Object,
    delivery: Object,
    status: Object,
    billing: Object,
    ratings: Object,
    cart: Array,
    currency: String,
    reference: String,
    sellers: Array,
    delivery_cost: Number,
    currency_symbol: String,
});
