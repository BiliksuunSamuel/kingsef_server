"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorInfoModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const VendorSchema_1 = require("../schema/VendorSchema");
exports.VendorInfoModel = mongoose_1.default.model("vendor", VendorSchema_1.VendorSchema);
