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
const AuthServices_1 = require("../../services/AuthServices");
const UserServices_1 = require("../../services/UserServices");
const VendorServices_1 = require("../../services/VendorServices");
const HandlePassword_1 = require("../../utilities/HandlePassword");
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const vendorInfo = (yield (0, VendorServices_1.GetVendorByEmail)({ email: data.email }));
            const userInfo = yield (0, UserServices_1.GetUserByEmail)(data.email);
            if (vendorInfo) {
                const authInfo = yield (0, AuthServices_1.GetAuthById)(vendorInfo.info.auth_id);
                if (authInfo) {
                    if (authInfo.otp.code === data.otp) {
                        yield (0, AuthServices_1.UpdateAccountPassword)({
                            id: vendorInfo.info.auth_id,
                            password: yield (0, HandlePassword_1.HashPassword)(data.pwd),
                        });
                        data.otp = "";
                        data.email = "";
                        data.pwd = "";
                        data.isvalid = true;
                        data.completed = true;
                        res.send({ data, message: "Account Password Changed Successfully" });
                    }
                    else {
                        res.status(404).send("Invalid OTP Code");
                    }
                }
                else {
                    res.status(404).send("invalid email address,try again");
                }
            }
            else if (userInfo) {
                const authInfo = yield (0, AuthServices_1.GetAuthById)(userInfo.info.auth_id);
                if (authInfo) {
                    if (authInfo.otp.code === data.otp) {
                        yield (0, AuthServices_1.UpdateAccountPassword)({
                            id: userInfo.info.auth_id,
                            password: yield (0, HandlePassword_1.HashPassword)(data.pwd),
                        });
                        data.otp = "";
                        data.email = "";
                        data.pwd = "";
                        data.isvalid = true;
                        data.completed = true;
                        res.send({ data, message: "Account Password Changed Successfully" });
                    }
                    else {
                        res.status(404).send("Invalid OTP Code");
                    }
                }
                else {
                    res.status(404).send("invalid email address,try again");
                }
            }
            else {
                res.status(404).send("invalid email address,try again");
            }
        }
        catch (error) {
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = default_1;
