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
const Services_1 = require("../../services/Services");
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const info = {
                id: data === null || data === void 0 ? void 0 : data.id,
                image: yield (0, Functions_1.WriteBase64File)(data === null || data === void 0 ? void 0 : data.image.data, data.id + (0, uuid_1.v4)()),
            };
            yield (0, Services_1.UpdateDisplayCat)(info);
            res.send({ data: yield (0, Services_1.GetDisplayCats)(), message: "Update Successful" });
        }
        catch (error) {
            console.log(error);
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = default_1;
