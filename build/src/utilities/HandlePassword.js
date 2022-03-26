"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyPassword = exports.HashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
///HASH PASSWORD
function HashPassword(password) {
    return new Promise(function (resolve, reject) {
        try {
            bcrypt_1.default.hash(password, 10, (error, hash) => {
                if (error) {
                    reject(error);
                }
                resolve(hash);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.HashPassword = HashPassword;
//VERIFY ACCOUNT PASSWORD
function VerifyPassword(password, hpassword) {
    return new Promise(function (resolve, reject) {
        try {
            bcrypt_1.default.compare(password, hpassword, (error, match) => {
                if (error) {
                    reject(error);
                }
                resolve(match);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.VerifyPassword = VerifyPassword;
