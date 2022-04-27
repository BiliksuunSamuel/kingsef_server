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
const Services_1 = require("../../services/Services");
const uuid_1 = require("uuid");
const ManagementServices_1 = require("../../services/ManagementServices");
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            if (Boolean(data.newInfo.image)) {
                const newPath = (yield (0, Functions_1.WriteBase64File)(data.newInfo.image, (0, uuid_1.v4)().toString()));
                yield (0, Functions_1.RemoveFileFromDir)(data.oldInfo.path);
                data.oldInfo.path = newPath;
            }
            if (Boolean(data.newInfo.id)) {
                data.oldInfo.access.id = data.newInfo.id;
            }
            yield (0, ManagementServices_1.UpdateAdvertisement)(data.oldInfo, data.oldInfo._id);
            res.send({
                data: yield (0, Services_1.GetAdverts)(),
                message: "Advertisement Details Updated Successfully",
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = default_1;
