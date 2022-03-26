"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = require("../constants/Routes");
const user_1 = require("../controller/user");
const UserRoutes_1 = require("../routes/UserRoutes");
const router = express_1.default.Router();
//POST REQUEST
router.post(Routes_1.userRoutes.login, user_1.LoginController);
router.post(Routes_1.userRoutes.register, user_1.RegisterController);
router.post(UserRoutes_1.UserRoutes.otp_verify, user_1.VerifyOTPController);
router.post(UserRoutes_1.UserRoutes.otp_resend, user_1.ResendOTPController);
router.post(UserRoutes_1.UserRoutes.review_add, user_1.AddReviewController);
router.post(UserRoutes_1.UserRoutes.reviews_get, user_1.GetReviewsController);
exports.default = router;
