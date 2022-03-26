"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AuthSchema_1 = require("../schema/AuthSchema");
exports.AuthModel = mongoose_1.default.model("auth", AuthSchema_1.AuthSchema);
