import express from "express";
import {
  AddDeliveryPricingController,
  GetDeliveryPricingController,
  RegisterController,
  ResendOTPController,
  UploadProductController,
  VerifyOTPController,
} from "../controller/vendor";
import { VendorRoutes } from "../routes/VendorRoutes";

const router = express.Router();

router.post(VendorRoutes.register, RegisterController);
router.post(VendorRoutes.otp_resend, ResendOTPController);
router.post(VendorRoutes.otp_verify, VerifyOTPController);
router.post(VendorRoutes.product_upload, UploadProductController);
router.post(VendorRoutes.delivery_pricing_add, AddDeliveryPricingController);
router.post(VendorRoutes.delivery_pricing_get, GetDeliveryPricingController);
export default router;
