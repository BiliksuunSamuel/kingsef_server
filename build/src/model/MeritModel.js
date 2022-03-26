"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MeritSchema_1 = __importDefault(require("../schema/MeritSchema"));
const MeritModel = mongoose_1.default.model("MeritModel", MeritSchema_1.default);
exports.default = MeritModel;
