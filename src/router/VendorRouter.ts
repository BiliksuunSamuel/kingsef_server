import express from "express";
import { AddAdvertController, GetAdvertsController } from "../controller/admin";
import {
  AddDeliveryPricingController,
  DeleteAdvertisementController,
  DeleteProductCategoryController,
  GetDeliveryPricingController,
  RegisterController,
  ResendOTPController,
  UpdateAdvertisementController,
  UpdateCategoryController,
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
router.post(VendorRoutes.banner_add, AddAdvertController);
router.post(VendorRoutes.banner_get, GetAdvertsController);
router.post(VendorRoutes.category_update, UpdateCategoryController);
router.post(VendorRoutes.category_delete, DeleteProductCategoryController);
router.post(VendorRoutes.advertisement_delete, DeleteAdvertisementController);
router.post(VendorRoutes.advertisement_update, UpdateAdvertisementController);
export default router;
