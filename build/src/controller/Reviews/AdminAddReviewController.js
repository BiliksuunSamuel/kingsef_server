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
const ReviewServices_1 = require("../../services/ReviewServices");
function AdminAddCommentsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const info = req.body;
            yield (0, ReviewServices_1.AddAdminComment)(Object.assign(Object.assign({}, info), { date_added: (0, moment_1.default)().format() }));
            res.send({
                data: yield (0, ReviewServices_1.GetAdminComments)(),
                message: "Message Sent Successfull",
            });
        }
        catch (error) {
            console.log();
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = AdminAddCommentsController;
