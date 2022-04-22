import express from "express";
import { LoginController, RegisterController } from "../controller/admin";
import {
  DeleteAdminPostController,
  UpdateAdminPostController,
} from "../controller/Reviews";
import { Routes } from "../routes/Routes";
import { VendorRoutes } from "../routes/VendorRoutes";

const router = express.Router();

///POST REQUEST
router.post(Routes.admin_login, LoginController);
router.post(Routes.admin_register, RegisterController);
router.post(VendorRoutes.admin_post_delete, DeleteAdminPostController);
router.post(VendorRoutes.admin_post_update, UpdateAdminPostController);
export default router;
