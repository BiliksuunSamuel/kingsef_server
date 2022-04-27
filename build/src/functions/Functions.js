"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteBase64FileChatImage = exports.WriteBase64File = exports.RemoveFileFromDir = exports.GenerateOTP = void 0;
const otp_client_1 = __importDefault(require("otp-client"));
const fs_1 = __importDefault(require("fs"));
function GenerateOTP() {
    const secret = "TPQDAHVBZ5NBO5LFEQKC7V7UPATSSMFY";
    const options = {
        algorithm: "sha256",
        digits: 6,
        period: 20,
    };
    const otp = new otp_client_1.default(secret, options);
    const token = otp.getToken(); // e.g. 74837433
    return token;
}
exports.GenerateOTP = GenerateOTP;
function RemoveFileFromDir(path) {
    return new Promise(function (resolve, reject) {
        try {
            fs_1.default.unlink("./src/assets/" + path, (error) => {
                error && reject(error);
                resolve(true);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.RemoveFileFromDir = RemoveFileFromDir;
function WriteBase64File(base64Data, id) {
    return new Promise(function (resolve, reject) {
        try {
            const fname = id + Date.now().toString() + `.jpg`;
            fs_1.default.writeFile("./src/assets/products/" + fname, base64Data, "base64", function (error) {
                if (error) {
                    reject(error);
                }
                resolve("products/" + fname);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.WriteBase64File = WriteBase64File;
function WriteBase64FileChatImage(base64Data, id) {
    return new Promise(function (resolve, reject) {
        try {
            const fname = id + Date.now().toString() + `.jpg`;
            fs_1.default.writeFile("./src/assets/chat_media/" + fname, base64Data, "base64", function (error) {
                if (error) {
                    reject(error);
                }
                resolve("chat_media/" + fname);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.WriteBase64FileChatImage = WriteBase64FileChatImage;
