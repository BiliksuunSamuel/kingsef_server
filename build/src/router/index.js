"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorRouter = exports.Router = exports.AdminRouter = exports.UserRouter = void 0;
var UserRouter_1 = require("./UserRouter");
Object.defineProperty(exports, "UserRouter", { enumerable: true, get: function () { return __importDefault(UserRouter_1).default; } });
var AdminRouter_1 = require("./AdminRouter");
Object.defineProperty(exports, "AdminRouter", { enumerable: true, get: function () { return __importDefault(AdminRouter_1).default; } });
var Router_1 = require("./Router");
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return __importDefault(Router_1).default; } });
var VendorRouter_1 = require("./VendorRouter");
Object.defineProperty(exports, "VendorRouter", { enumerable: true, get: function () { return __importDefault(VendorRouter_1).default; } });
