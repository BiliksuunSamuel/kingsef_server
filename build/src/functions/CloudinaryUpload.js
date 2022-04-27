"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleFileUpload = void 0;
const cloudinary_1 = require("cloudinary");
function HandleFileUpload(data) {
    return new Promise(function (resolve, reject) {
        try {
            cloudinary_1.v2.uploader.upload(data, (error, response) => {
                error && reject(error);
                resolve(response);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.HandleFileUpload = HandleFileUpload;
