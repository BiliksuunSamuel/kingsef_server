"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.UserInfoSchema = new mongoose_1.default.Schema({
    info: {
        firstname: String,
        lastname: String,
        phone: String,
        email: String,
        auth_id: String,
        status: Number,
        authenticated: Boolean,
        otp_expiresIn: String,
    },
    country: {
        state_region: Object,
        dial_code: String,
        name: String,
        code: String,
        flag: String,
        currency: String,
    },
});
