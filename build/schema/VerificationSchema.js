"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.VerificationSchema = new mongoose_1.default.Schema({
    verification_code: String,
    verified: Boolean,
    code_time: String,
    user_id: String,
});
