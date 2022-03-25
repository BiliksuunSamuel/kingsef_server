import express from "express";
import {
  AddPackageController,
  AddPackageOrderController,
  AddPressingCatController,
  GetPackageController,
  GetPackageOrdersController,
  GetPressingCatsController,
  GetUsersController,
  ProductApproveDeclineController,
  UpdatePressingCatController,
  VendorAccountStatusController,
} from "../controller/admin";
import {
  AddCategoryController,
  AddMeritController,
  GetCategoriesController,
  GetMeritsController,
  GetProductsController,
  GetVendorsController,
  LoginController,
  PackageLikesController,
  PackageFavoritesController,
  PlaceOrderController,
  GetOrdersController,
  UpdateOrderInfoController,
} from "../controller/controllers";
import { FavoriteProductController } from "../controller/products";
import {
  AddAdminCommentsController,
  GetAdminCommentsController,
} from "../controller/Reviews";
import {
  FollowUnFollowVendorController,
  RateVendorController,
} from "../controller/vendor";
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
router.post(Routes.users_get, GetUsersController);
router.post(Routes.vendor_acccount_status, VendorAccountStatusController);
router.post(Routes.pressing_cat_add, AddPressingCatController);
router.post(Routes.pressing_cat_get, GetPressingCatsController);
router.post(Routes.pressing_cat_update, UpdatePressingCatController);
router.post(Routes.package_add, AddPackageController);
router.post(Routes.package_get, GetPackageController);
router.post(Routes.package_order_add, AddPackageOrderController);
router.post(Routes.package_order_get, GetPackageOrdersController);
router.post(Routes.admin_comments_add, AddAdminCommentsController);
router.post(Routes.admin_comments_get, GetAdminCommentsController);
router.post(Routes.package_like, PackageLikesController);
router.post(Routes.package_favorite, PackageFavoritesController);
router.post(Routes.order_place, PlaceOrderController);
router.post(Routes.orders_get, GetOrdersController);
router.post(Routes.order_update, UpdateOrderInfoController);
router.post(Routes.rate_vendor, RateVendorController);
router.post(Routes.follow_unfollow_vendor, FollowUnFollowVendorController);
router.post(Routes.favorite_product, FavoriteProductController);
export default router;
