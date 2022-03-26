"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Config_1 = require("../configuration/Config");
const connection = mongoose_1.default.connect(Config_1.connectionString, (error) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log("Database connected");
});
exports.default = connection;
