"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const VerificationSchema_1 = require("../schema/VerificationSchema");
exports.VerificationModel = mongoose_1.default.model("verification", VerificationSchema_1.VerificationSchema);
