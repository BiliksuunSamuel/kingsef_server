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
const Functions_1 = require("../../functions/Functions");
const Services_1 = require("../../services/Services");
function default_1(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const info = request.body;
            info.date_paid = (0, moment_1.default)().format();
            info.reference = (0, Functions_1.GenerateOTP)();
            const Info = yield (0, Services_1.AddDebitPayment)(info);
            response.send({
                message: "Payment Successfull",
                data: yield (0, Services_1.GetDebitsPayments)(),
            });
        }
        catch (error) {
            console.log(error);
            response.status(404).send("Server Network Error");
        }
    });
}
exports.default = default_1;
