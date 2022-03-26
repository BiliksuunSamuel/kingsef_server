"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = exports.ProductInfoModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema_1 = require("../schema/ProductSchema");
exports.ProductInfoModel = mongoose_1.default.model("product", ProductSchema_1.ProductSchema);
exports.CategoryModel = mongoose_1.default.model("category", ProductSchema_1.CategorySchema);
