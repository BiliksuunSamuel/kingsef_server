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
const uuid_1 = require("uuid");
const Functions_1 = require("../../functions/Functions");
const Services_1 = require("../../services/Services");
function AddAdvertController(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const advert_info = {
                path: "",
                access: data.access,
            };
            const filename = yield (0, Functions_1.WriteBase64File)((_a = data.image) === null || _a === void 0 ? void 0 : _a.data, (0, uuid_1.v4)());
            advert_info.path = filename;
            yield (0, Services_1.AddAdvert)(advert_info);
            res.send({
                message: "Advertisement Added Successfull",
                data: yield (0, Services_1.GetAdverts)(),
            });
        }
        catch (error) {
            console.log(error);
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = AddAdvertController;
