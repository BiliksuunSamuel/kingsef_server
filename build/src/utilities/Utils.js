"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMoment = void 0;
const moment_1 = __importDefault(require("moment"));
function GetMoment() {
    return (0, moment_1.default)().format();
}
exports.GetMoment = GetMoment;
