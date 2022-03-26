"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = require("../controller/admin");
const vendor_1 = require("../controller/vendor");
const VendorRoutes_1 = require("../routes/VendorRoutes");
const router = express_1.default.Router();
router.post(VendorRoutes_1.VendorRoutes.register, vendor_1.RegisterController);
router.post(VendorRoutes_1.VendorRoutes.otp_resend, vendor_1.ResendOTPController);
router.post(VendorRoutes_1.VendorRoutes.otp_verify, vendor_1.VerifyOTPController);
router.post(VendorRoutes_1.VendorRoutes.product_upload, vendor_1.UploadProductController);
router.post(VendorRoutes_1.VendorRoutes.delivery_pricing_add, vendor_1.AddDeliveryPricingController);
router.post(VendorRoutes_1.VendorRoutes.delivery_pricing_get, vendor_1.GetDeliveryPricingController);
router.post(VendorRoutes_1.VendorRoutes.banner_add, admin_1.AddAdvertController);
router.post(VendorRoutes_1.VendorRoutes.banner_get, admin_1.GetAdvertsController);
exports.default = router;
