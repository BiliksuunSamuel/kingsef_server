"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Functions_1 = require("../../functions/Functions");
const EmailServices_1 = require("../../services/EmailServices");
const VendorServices_1 = require("../../services/VendorServices");
const AuthServices_1 = require("../../services/AuthServices");
function default_1(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const info = req.body;
            console.log(info);
            const new_otp = yield (0, Functions_1.GenerateOTP)();
            const data = yield (0, VendorServices_1.GetVendorByEmail)({ email: info.email });
            yield (0, VendorServices_1.ResendOTP)(info.email);
            yield (0, AuthServices_1.ResendOTP)({ id: info.auth_id, otp: new_otp });
            ///
            yield (0, EmailServices_1.SendMail)((0, EmailServices_1.PrepareEmail)({
                sender: "KinSef",
                receiver: data === null || data === void 0 ? void 0 : data.info.email,
                subject: "Account Registration",
                message: (0, EmailServices_1.PrepareMessage)({
                    name: `${(_a = data === null || data === void 0 ? void 0 : data.info) === null || _a === void 0 ? void 0 : _a.firstname} ${(_b = data === null || data === void 0 ? void 0 : data.info) === null || _b === void 0 ? void 0 : _b.lastname}`,
                    otp: new_otp,
                }),
            }));
            res.send(yield (0, VendorServices_1.GetVendorByEmail)({ email: info.email }));
        }
        catch (error) {
            console.log(error);
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = default_1;
