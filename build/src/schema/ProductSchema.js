"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = exports.ProductSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ProductSchema = new mongoose_1.default.Schema({
    status: Object,
    vendor_id: String,
    regular_price: Number,
    sales_price: Number,
    description: Array,
    quantity: Number,
    date_added: String,
    name: String,
    category: String,
    up_sells: String,
    gallery: Array,
    image: String,
    cross_sells: String,
    type: String,
    seo: String,
    estimated_delivery: Object,
    brands: String,
    variable: Array,
    merit: Number,
    country_code: String,
    favorites: Array,
    available: Boolean,
    details_listing: Array,
    currency: String,
    country_info: Object,
    sub_category: String,
    search_keyword: String,
    ispackaging: Boolean,
});
exports.CategorySchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    sub_cate: Array,
});
