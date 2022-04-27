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
const AuthServices_1 = require("../../services/AuthServices");
const EmailServices_1 = require("../../services/EmailServices");
const UserServices_1 = require("../../services/UserServices");
const VendorServices_1 = require("../../services/VendorServices");
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const userInfo = yield (0, UserServices_1.GetUserByEmail)(data.email);
            const vendorInfo = (yield (0, VendorServices_1.GetVendorByEmail)({ email: data.email }));
            const otp = (0, Functions_1.GenerateOTP)();
            if (userInfo) {
                const mailInfo = (0, EmailServices_1.PrepareEmail)({
                    sender: "KINSEF",
                    receiver: userInfo.info.email,
                    subject: "KINSEF- Account Password Reset",
                    message: (0, EmailServices_1.PreparePasswordResetMailMessage)({
                        name: userInfo.info.firstname,
                        otp,
                    }),
                });
                yield (0, EmailServices_1.SendMail)(mailInfo);
                yield (0, AuthServices_1.UpdateAccountOTP)({ id: userInfo.info.auth_id, otp });
                data.isvalid = true;
                res.send(data);
            }
            else if (vendorInfo) {
                const mailInfo = (0, EmailServices_1.PrepareEmail)({
                    sender: "KINSEF",
                    receiver: vendorInfo.info.email,
                    subject: "KINSEF- Account Password Reset",
                    message: (0, EmailServices_1.PreparePasswordResetMailMessage)({
                        name: vendorInfo.info.firstname,
                        otp,
                    }),
                });
                yield (0, EmailServices_1.SendMail)(mailInfo);
                yield (0, AuthServices_1.UpdateAccountOTP)({ id: vendorInfo.info.auth_id, otp });
                data.isvalid = true;
                res.send(data);
            }
            else {
                res.status(404).send("incorrect email address");
            }
        }
        catch (error) {
            res.status(404).send("");
        }
    });
}
exports.default = default_1;
