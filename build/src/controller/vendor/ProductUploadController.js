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
const FormatRequest_1 = require("../../utilities/FormatRequest");
const uuid_1 = require("uuid");
const ProductServices_1 = require("../../services/ProductServices");
function default_1(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            for (let i = 0; i < data.length; i++) {
                const imagesContainer = [];
                let product = data[i];
                for (let j = 0; j < product.gallery.length; j++) {
                    imagesContainer.push(yield (0, Functions_1.WriteBase64File)((_a = product.gallery[j]) === null || _a === void 0 ? void 0 : _a.base64, (0, uuid_1.v4)()));
                }
                const pimage = yield (0, Functions_1.WriteBase64File)((_b = product.image) === null || _b === void 0 ? void 0 : _b.base64, (0, uuid_1.v4)());
                const productInfo = (0, FormatRequest_1.PrepareNewProductInfo)(product, pimage, imagesContainer);
                yield (0, ProductServices_1.AddNewProduct)(productInfo);
            }
            res.send("Product Uploaded Sucessfully");
        }
        catch (error) {
            console.log(error);
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = default_1;
