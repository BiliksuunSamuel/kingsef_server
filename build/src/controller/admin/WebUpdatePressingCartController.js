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
const WebFileUpload_1 = require("../../functions/WebFileUpload");
const Services_1 = require("../../services/Services");
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const files = req.files;
            const newpath = yield (0, WebFileUpload_1.UploadWebFile)(files === null || files === void 0 ? void 0 : files.file);
            const info = {
                _id: "",
                cat_ref: data.ref,
                image: newpath,
            };
            yield (0, Services_1.UpdateDisplayCatInfo)(data.id, info);
            res.send({
                data: yield (0, Services_1.GetDisplayCats)(),
                message: "Data Received Successfully",
            });
        }
        catch (error) {
            console.log(error);
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = default_1;
