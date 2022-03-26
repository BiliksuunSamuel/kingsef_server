"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = require("../controller/admin");
const Routes_1 = require("../routes/Routes");
const router = express_1.default.Router();
///POST REQUEST
router.post(Routes_1.Routes.admin_login, admin_1.LoginController);
router.post(Routes_1.Routes.admin_register, admin_1.RegisterController);
exports.default = router;
