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
const os_1 = require("os");
const AuthServices_1 = require("../../services/AuthServices");
const UserServices_1 = require("../../services/UserServices");
const VendorServices_1 = require("../../services/VendorServices");
const HandlePassword_1 = require("../../utilities/HandlePassword");
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const VendorInfo = yield (0, VendorServices_1.GetVendorByEmail)({ email: data.email });
            const UserInfo = yield (0, UserServices_1.GetUserByEmail)(data.email);
            if (VendorInfo) {
                const AuthInfo = yield (0, AuthServices_1.GetAuthById)(VendorInfo.info.auth_id);
                const match = yield (0, HandlePassword_1.VerifyPassword)(data.password, AuthInfo.password);
                if (match) {
                    res.send({ vendor: VendorInfo, user: null });
                }
                else {
                    res.status(404).send("Incorrect Login Password");
                }
            }
            else if (os_1.userInfo) {
                const AuthInfo = yield (0, AuthServices_1.GetAuthById)(UserInfo.info.auth_id);
                const match = yield (0, HandlePassword_1.VerifyPassword)(data.password, AuthInfo.password);
                if (match) {
                    res.send({ vendor: null, user: os_1.userInfo });
                }
                else {
                    res.status(404).send("Incorrect Login Password");
                }
            }
            else {
                res.status(404).send("Invalid Login Email Addresss");
            }
        }
        catch (error) {
            console.log(error);
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = default_1;
