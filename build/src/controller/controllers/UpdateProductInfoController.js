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
const uuid_1 = require("uuid");
const ProductServices_1 = require("../../services/ProductServices");
function default_1(req, res) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const imagesContainer = [];
            if (data.Images.gallery.length > 0) {
                for (let j = 0; j < data.Images.gallery.length; j++) {
                    imagesContainer.push(yield (0, Functions_1.WriteBase64File)((_a = data.Images.gallery[j]) === null || _a === void 0 ? void 0 : _a.data, (0, uuid_1.v4)()));
                }
                for (let i = 0; i < data.info.gallery.length; i++) {
                    yield (0, Functions_1.RemoveFileFromDir)(data.info.gallery[i]);
                }
                data.info.gallery = imagesContainer;
            }
            if (data.Images.image) {
                const pimage = yield (0, Functions_1.WriteBase64File)((_b = data.Images.image) === null || _b === void 0 ? void 0 : _b.data, (0, uuid_1.v4)());
                yield (0, Functions_1.RemoveFileFromDir)(data.info.image);
                data.info.image = pimage;
            }
            yield (0, ProductServices_1.UpdateProductInfo)(data.info, (_c = data.info) === null || _c === void 0 ? void 0 : _c._id);
            res.send("Product Updated Sucessfully");
        }
        catch (error) {
            console.log(error);
            res.status(404).send("server network error");
        }
    });
}
exports.default = default_1;
