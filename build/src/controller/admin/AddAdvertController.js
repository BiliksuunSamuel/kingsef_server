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
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            for (let i = 0; i < data.length; i++) {
                const banner = data[i];
                const filename = yield (0, Functions_1.WriteBase64File)(banner === null || banner === void 0 ? void 0 : banner.data, (0, uuid_1.v4)());
                yield (0, Services_1.AddAdvert)({ path: filename });
            }
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
