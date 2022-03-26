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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const uuid_1 = require("uuid");
const Functions_1 = require("../../functions/Functions");
const Services_1 = require("../../services/Services");
function AddPackageController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const Images = [];
            for (let i = 0; i < data.images.length; i++) {
                const val = data.images[i];
                Images.push(yield (0, Functions_1.WriteBase64File)(val.data, (0, uuid_1.v4)()));
            }
            const info = Object.assign(Object.assign({}, data), { images: Images, date_added: (0, moment_1.default)().format(), status: 1 });
            yield (0, Services_1.AddPackage)(info);
            res.send({
                message: "Packaging Item Added Succefully",
                data: yield (0, Services_1.GetPackages)(),
            });
        }
        catch (error) {
            console.log(error);
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = AddPackageController;
