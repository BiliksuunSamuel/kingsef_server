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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const Functions_1 = require("../../functions/Functions");
const AuthServices_1 = require("../../services/AuthServices");
const EmailServices_1 = require("../../services/EmailServices");
const UserServices_1 = require("../../services/UserServices");
const HandlePassword_1 = require("../../utilities/HandlePassword");
function RegisterController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const otp = (0, Functions_1.GenerateOTP)();
            yield (0, EmailServices_1.SendMail)((0, EmailServices_1.PrepareEmail)({
                sender: "KinSef",
                receiver: data.info.email,
                subject: "Account Registration",
                message: (0, EmailServices_1.PrepareMessage)({
                    name: `${data.info.firstname} ${data.info.lastname}`,
                    otp,
                }),
            }));
            const info = {
                info: Object.assign(Object.assign({}, data.info), { auth_id: "", status: 1, authenticated: false, otp_expiresIn: (0, moment_1.default)().add(15, "minute").format() }),
                country: Object.assign(Object.assign({}, data.country), { currency: data.country.currency[0] }),
            };
            const authInfo = data.auth;
            authInfo.password = yield (0, HandlePassword_1.HashPassword)(authInfo.password);
            const Auth = Object.assign(Object.assign({}, authInfo), { otp: { code: otp, status: 0 } });
            info.country.dial_code = info.country.dial_code[0];
            const AuthInfo = yield (0, AuthServices_1.RegisterAuthInfo)(Auth);
            info.info.auth_id = AuthInfo._id;
            const results = yield (0, UserServices_1.RegisterUser)(info);
            res.send(results);
        }
        catch (error) {
            console.log(error);
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = RegisterController;
