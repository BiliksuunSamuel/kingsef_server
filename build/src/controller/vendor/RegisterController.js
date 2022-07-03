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
const Functions_1 = require("../../functions/Functions");
const AuthServices_1 = require("../../services/AuthServices");
const HandlePassword_1 = require("../../utilities/HandlePassword");
const VendorServices_1 = require("../../services/VendorServices");
const moment_1 = __importDefault(require("moment"));
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const info = {
                info: Object.assign(Object.assign({}, data.info), { authenticated: false, auth_id: "", ratings: {
                        raters: [],
                        values: [],
                    }, followers: [] }),
                bank: data.bank,
                country: data.country,
                business: data.business,
                account: { status: 0, role: 0 },
            };
            const results = yield (0, VendorServices_1.GetVendorByEmail)({ email: info.info.email });
            if (results) {
                res.send(results);
            }
            else {
                const auth = data.auth;
                const otp = (0, Functions_1.GenerateOTP)();
                const Auth = {
                    password: auth.password,
                    authenticated: false,
                    otp: { code: otp, status: 0 },
                };
                // await SendMail(
                //   PrepareEmail({
                //     sender: "KinSef",
                //     receiver: data.info.email,
                //     subject: "Account Registration",
                //     message: PrepareMessage({
                //       name: `${data.info.firstname} ${data.info.lastname}`,
                //       otp,
                //     }),
                //   })
                // );
                Auth.password = yield (0, HandlePassword_1.HashPassword)(Auth.password);
                info.country.dial_code = info.country.dial_code[0];
                info.country.currency = info.country.currency[0];
                info.info.otp_expiresIn = (0, moment_1.default)().add(15, "minutes").format();
                const AuthInfo = yield (0, AuthServices_1.RegisterAuthInfo)(Auth);
                info.info.auth_id = AuthInfo._id;
                const UInfo = yield (0, VendorServices_1.AddVendor)(info);
                res.send(UInfo);
            }
        }
        catch (error) {
            console.log(error);
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = default_1;
