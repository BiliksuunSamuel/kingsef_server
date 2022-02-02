import express from "express";
import {
  RegisterController,
  ResendOTPController,
  VerifyOTPController,
} from "../controller/vendor";
import { VendorRoutes } from "../routes/VendorRoutes";

const router = express.Router();

router.post(VendorRoutes.register, RegisterController);
router.post(VendorRoutes.otp_resend, ResendOTPController);
router.post(VendorRoutes.otp_verify, VerifyOTPController);
export default router;
