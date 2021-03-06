"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = require("../controller/admin");
const DeleteDisplayCatController_1 = __importDefault(require("../controller/admin/DeleteDisplayCatController"));
const controllers_1 = require("../controller/controllers");
const products_1 = require("../controller/products");
const Reviews_1 = require("../controller/Reviews");
const vendor_1 = require("../controller/vendor");
const UpdateAccountInfoController_1 = __importDefault(require("../controller/vendor/UpdateAccountInfoController"));
const Routes_1 = require("../routes/Routes");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("Hello World");
});
router.post(Routes_1.Routes.category_add, controllers_1.AddCategoryController);
router.post(Routes_1.Routes.categories_get, controllers_1.GetCategoriesController);
router.post(Routes_1.Routes.products_get, controllers_1.GetProductsController);
router.post(Routes_1.Routes.merit_add, controllers_1.AddMeritController);
router.post(Routes_1.Routes.merit_get, controllers_1.GetMeritsController);
router.post(Routes_1.Routes.auth_login, controllers_1.LoginController);
router.post(Routes_1.Routes.vendors_get, controllers_1.GetVendorsController);
router.post(Routes_1.Routes.product_approve_decline, admin_1.ProductApproveDeclineController);
router.post(Routes_1.Routes.users_get, admin_1.GetUsersController);
router.post(Routes_1.Routes.vendor_acccount_status, admin_1.VendorAccountStatusController);
router.post(Routes_1.Routes.pressing_cat_add, admin_1.AddPressingCatController);
router.post(Routes_1.Routes.pressing_cat_get, admin_1.GetPressingCatsController);
router.post(Routes_1.Routes.pressing_cat_update, admin_1.UpdatePressingCatController);
router.post(Routes_1.Routes.package_add, admin_1.AddPackageController);
router.post(Routes_1.Routes.package_get, admin_1.GetPackageController);
router.post(Routes_1.Routes.package_order_add, admin_1.AddPackageOrderController);
router.post(Routes_1.Routes.package_order_get, admin_1.GetPackageOrdersController);
router.post(Routes_1.Routes.admin_comments_add, Reviews_1.AddAdminCommentsController);
router.post(Routes_1.Routes.admin_comments_get, Reviews_1.GetAdminCommentsController);
router.post(Routes_1.Routes.package_like, controllers_1.PackageLikesController);
router.post(Routes_1.Routes.package_favorite, controllers_1.PackageFavoritesController);
router.post(Routes_1.Routes.order_place, controllers_1.PlaceOrderController);
router.post(Routes_1.Routes.orders_get, controllers_1.GetOrdersController);
router.post(Routes_1.Routes.order_update, controllers_1.UpdateOrderInfoController);
router.post(Routes_1.Routes.rate_vendor, vendor_1.RateVendorController);
router.post(Routes_1.Routes.follow_unfollow_vendor, vendor_1.FollowUnFollowVendorController);
router.post(Routes_1.Routes.favorite_product, products_1.FavoriteProductController);
router.post(Routes_1.Routes.product_info_update, controllers_1.UpdateProductInfoController);
router.post(Routes_1.Routes.vendor_account_update, UpdateAccountInfoController_1.default);
router.post(Routes_1.Routes.enable_disable_product, controllers_1.EnableDisasbleProductController);
router.post(Routes_1.Routes.debits_payments_add, admin_1.AddDebitsPaymentsController);
router.post(Routes_1.Routes.debits_payments_get, admin_1.GetDebitsPaymentsController);
router.post(Routes_1.Routes.package_order_info_update, admin_1.UpdatePackagingOrderInfoController);
router.post(Routes_1.Routes.chat_image_upload, controllers_1.ChatImageUploadController);
router.post(Routes_1.Routes.password_reset, controllers_1.ResetPasswordOTPController);
router.post(Routes_1.Routes.password_reset_pwd, controllers_1.ResetPasswordController);
router.post(Routes_1.Routes.update_pressing_cat, admin_1.UpdatePressingCatController);
router.post(Routes_1.Routes.delete_pressing_cat, DeleteDisplayCatController_1.default);
exports.default = router;
