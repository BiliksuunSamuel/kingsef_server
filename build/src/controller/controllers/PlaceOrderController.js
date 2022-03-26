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
const EmailServices_1 = require("../../services/EmailServices");
const OrderServices_1 = require("../../services/OrderServices");
function PlaceOrderController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orderInfo = req.body;
            orderInfo.date = (0, moment_1.default)().format();
            orderInfo.reference = (0, Functions_1.GenerateOTP)();
            orderInfo.ratings = { raters: [], values: [] };
            orderInfo.sellers = GetSellers(orderInfo.content);
            yield (0, EmailServices_1.OrderPlacementEmailMessage)({
                to: orderInfo.billing.email,
                amount: orderInfo.amount,
                qnty: orderInfo.content.length,
                currency: orderInfo.currency,
            });
            yield (0, OrderServices_1.AddOrder)(orderInfo);
            res.send(true);
        }
        catch (error) {
            console.log(error);
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = PlaceOrderController;
function GetSellers(content) {
    const sellers = Array.from(new Set(content.map(({ ["seller"]: value }) => value)));
    return sellers;
}
