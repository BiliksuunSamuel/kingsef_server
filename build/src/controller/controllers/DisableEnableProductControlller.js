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
const ProductServices_1 = require("../../services/ProductServices");
function default_1(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const info = request.body;
            yield (0, ProductServices_1.EnableDisableProduct)(info, info._id);
            response.send("Product Status Changed Successfully");
        }
        catch (error) {
            console.log(error);
            response.status(404).send("Server Network Error");
        }
    });
}
exports.default = default_1;
