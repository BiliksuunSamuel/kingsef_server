"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.AuthSchema = new mongoose_1.default.Schema({
    password: String,
    authenticated: Boolean,
    otp: { code: String, status: Number },
});
