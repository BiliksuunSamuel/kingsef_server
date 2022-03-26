"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorRoutes = void 0;
var VendorRoutes;
(function (VendorRoutes) {
    VendorRoutes["register"] = "/api/vendor/register";
    VendorRoutes["login"] = "/api/vendor/login";
    VendorRoutes["otp_resend"] = "/api/vendor/otp/resend";
    VendorRoutes["otp_verify"] = "/api/vendor/otp/verify";
    VendorRoutes["product_upload"] = "/api/vendor/products/upload";
    VendorRoutes["delivery_pricing_add"] = "/api/vendor/delivery/pricing/add";
    VendorRoutes["delivery_pricing_get"] = "/api/vendor/delivery/pricing/get";
    VendorRoutes["banner_add"] = "/api/vendor/advertisement/add";
    VendorRoutes["banner_get"] = "/api/vendor/advertisement/get";
})(VendorRoutes = exports.VendorRoutes || (exports.VendorRoutes = {}));
