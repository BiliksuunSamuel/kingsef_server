"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepareNewProductInfo = exports.PrepareVerificationInfo = exports.PrepareAuthInfo = exports.PropareUserAccountInfo = void 0;
const moment_1 = __importDefault(require("moment"));
const Utils_1 = require("./Utils");
///PREPARE USER ACCOUNT INFO
function PropareUserAccountInfo(info) {
    const Info = {
        firstname: info === null || info === void 0 ? void 0 : info.firstname,
        lastname: info === null || info === void 0 ? void 0 : info.lastname,
        email: info === null || info === void 0 ? void 0 : info.email,
        country: info === null || info === void 0 ? void 0 : info.country,
        state: info === null || info === void 0 ? void 0 : info.state,
        status: 1,
        verification_id: "",
        id: "",
        auth_id: "",
        authenticated: false,
    };
    return Info;
}
exports.PropareUserAccountInfo = PropareUserAccountInfo;
///PREPARE AUTHENTICATION DETAILS
function PrepareAuthInfo(info) {
    const Info = {
        email: info === null || info === void 0 ? void 0 : info.email,
        password: info === null || info === void 0 ? void 0 : info.password,
    };
    return Info;
}
exports.PrepareAuthInfo = PrepareAuthInfo;
///PREPARE VERIFICATION DETAILS
function PrepareVerificationInfo(info) {
    const Info = {
        verification_code: info === null || info === void 0 ? void 0 : info.verification_code,
        verified: false,
        user_id: "",
        code_time: (0, Utils_1.GetMoment)(),
    };
    return Info;
}
exports.PrepareVerificationInfo = PrepareVerificationInfo;
function PrepareNewProductInfo(info, image, gallery) {
    const Info = {
        name: info === null || info === void 0 ? void 0 : info.name,
        sales_price: info.sales_price,
        regular_price: info.regular_price,
        description: info === null || info === void 0 ? void 0 : info.description,
        discount: info === null || info === void 0 ? void 0 : info.discount,
        date_added: (0, moment_1.default)().format(),
        category: info === null || info === void 0 ? void 0 : info.category,
        quantity: info === null || info === void 0 ? void 0 : info.quantity,
        status: { approved: false, processed: 0, declined: false },
        vendor_id: info === null || info === void 0 ? void 0 : info.vendor_id,
        image,
        gallery,
        seo: info.seo,
        cross_sells: info.cross_sells,
        estimated_delivery: info.estimated_delivery,
        variable: info.variable,
        up_sells: info.up_sells,
        merit: 0,
        type: info.type,
        country_code: info === null || info === void 0 ? void 0 : info.country_code,
        favorites: [],
        available: true,
        details_listing: info.details_listing,
        currency: info.currency,
        country_info: info.country_info,
        sub_category: info.sub_category,
        search_keyword: info.search_keyword,
        ispackaging: info.ispackaging,
        brands: info.brands,
    };
    return Info;
}
exports.PrepareNewProductInfo = PrepareNewProductInfo;
