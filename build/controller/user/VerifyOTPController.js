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
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const info = req.body;
            const auth = yield (0, AuthServices_1.GetAuthById)(info.auth_id);
            if (!auth) {
                res.status(404).send("Acccess Denied");
            }
            else {
                const match = Boolean(auth.otp.code === info.otp);
                if (match) {
                    yield (0, UserServices_1.OTPApproved)({ email: info === null || info === void 0 ? void 0 : info.email });
                    yield (0, AuthServices_1.OTPAccepted)({ id: info.auth_id });
                    const userInfo = yield (0, UserServices_1.GetUserByEmail)(info.email);
                    res.send(userInfo);
                }
                else {
                    res.status(404).send("Invalid OTP Code");
                }
            }
        }
        catch (error) {
            console.log(error);
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = default_1;
