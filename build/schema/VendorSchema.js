"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.VendorSchema = new mongoose_1.default.Schema({
    info: {
        firstname: String,
        lastname: String,
        phone: String,
        email: String,
        auth_id: String,
        authenticated: Boolean,
        otp_expiresIn: String,
        ratings: Object,
        followers: Array,
    },
    country: {
        state_region: Object,
        dial_code: String,
        name: String,
        code: String,
        flag: String,
        currency: String,
    },
    account: { status: Number, role: Number },
    business: { title: String, motto: String, address: String },
    bank: {
        name: String,
        branch: String,
        account_number: String,
        iban: String,
        account_holder: String,
    },
});
