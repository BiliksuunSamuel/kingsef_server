import express from "express";
import {
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
export default router;
