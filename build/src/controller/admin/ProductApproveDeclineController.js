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
const ProductServices_1 = require("../../services/ProductServices");
const Services_1 = require("../../services/Services");
function ProductApproveDeclineController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const info = req.body;
            if (info.approve) {
                yield (0, ProductServices_1.ApproveProduct)({ id: info.id, merit: info.merit });
                return res.send({
                    data: yield (0, ProductServices_1.GetProducts)(),
                    message: "Product Approved",
                });
            }
            else if (info.decline) {
                const Note = {
                    sender: { isAdmin: true, id: info.sender },
                    receiver: info.receiver,
                    message: info.message,
                    reference: { title: "product_decline", id: info.id },
                    date: (0, moment_1.default)().format(),
                    status: { seen: false },
                    subject: "Product Declined",
                };
                yield (0, Services_1.AddNotification)(Note);
                yield (0, ProductServices_1.DeclineProduct)({ id: info.id });
                return res.send({
                    data: yield (0, ProductServices_1.GetProducts)(),
                    message: "Product Declined",
                });
            }
            else {
                return res.send({ data: yield (0, ProductServices_1.GetProducts)(), message: null });
            }
        }
        catch (error) {
            console.log(error);
            res.status(404).send("Server Network Error");
        }
    });
}
exports.default = ProductApproveDeclineController;
