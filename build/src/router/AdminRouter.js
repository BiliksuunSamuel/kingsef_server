"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = require("../controller/admin");
const Reviews_1 = require("../controller/Reviews");
const Routes_1 = require("../routes/Routes");
const VendorRoutes_1 = require("../routes/VendorRoutes");
const router = express_1.default.Router();
///POST REQUEST
router.post(Routes_1.Routes.admin_login, admin_1.LoginController);
router.post(Routes_1.Routes.admin_register, admin_1.RegisterController);
router.post(VendorRoutes_1.VendorRoutes.admin_post_delete, Reviews_1.DeleteAdminPostController);
router.post(VendorRoutes_1.VendorRoutes.admin_post_update, Reviews_1.UpdateAdminPostController);
exports.default = router;
