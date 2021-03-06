import express from "express";
import { userRoutes } from "../constants/Routes";
import {
  AddReviewController,
  GetReviewsController,
  LoginController,
  RegisterController,
  ResendOTPController,
  VerifyOTPController,
} from "../controller/user";
import { UserRoutes } from "../routes/UserRoutes";

const router = express.Router();

//POST REQUEST
router.post(userRoutes.login, LoginController);
router.post(userRoutes.register, RegisterController);
router.post(UserRoutes.otp_verify, VerifyOTPController);
router.post(UserRoutes.otp_resend, ResendOTPController);
router.post(UserRoutes.review_add, AddReviewController);
router.post(UserRoutes.reviews_get, GetReviewsController);

export default router;
