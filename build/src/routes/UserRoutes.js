"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
var UserRoutes;
(function (UserRoutes) {
    UserRoutes["register"] = "/api/user/register";
    UserRoutes["login"] = "/api/user/login";
    UserRoutes["otp_resend"] = "/api/user/otp/resend";
    UserRoutes["otp_verify"] = "/api/user/otp/verify";
    UserRoutes["review_add"] = "/api/user/review/add";
    UserRoutes["reviews_get"] = "/api/user/reviews/get";
})(UserRoutes = exports.UserRoutes || (exports.UserRoutes = {}));
