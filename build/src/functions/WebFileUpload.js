"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadWebFile = void 0;
const uuid_1 = require("uuid");
function UploadWebFile(file) {
    return new Promise(function (resolve, reject) {
        try {
            const filename = file.name;
            const filetype = filename.split(".")[1];
            const nameid = (0, uuid_1.v4)().toString();
            const filepath = "./src/public/products/" + `${nameid}.${filetype}`;
            file.mv(filepath, (error) => {
                error && reject(error);
                resolve("products/" + nameid + "." + filetype);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.UploadWebFile = UploadWebFile;
