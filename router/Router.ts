import express from "express";
import { ProductApproveDeclineController } from "../controller/admin";
import {
  AddCategoryController,
  AddMeritController,
  GetCategoriesController,
  GetMeritsController,
  GetProductsController,
  GetVendorsController,
  LoginController,
} from "../controller/controllers";
import { Routes } from "../routes/Routes";

const router = express.Router();

router.post(Routes.category_add, AddCategoryController);
router.post(Routes.categories_get, GetCategoriesController);
router.post(Routes.products_get, GetProductsController);
router.post(Routes.merit_add, AddMeritController);
router.post(Routes.merit_get, GetMeritsController);
router.post(Routes.auth_login, LoginController);
router.post(Routes.vendors_get, GetVendorsController);
router.post(Routes.product_approve_decline, ProductApproveDeclineController);
export default router;
