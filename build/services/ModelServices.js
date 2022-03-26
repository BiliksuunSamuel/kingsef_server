"use strict";
//add new merit
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMerits = exports.AddMerit = void 0;
const MeritModel_1 = __importDefault(require("../model/MeritModel"));
function AddMerit(info) {
    return new Promise(function (resolve, reject) {
        try {
            const Info = new MeritModel_1.default(info);
            Info.save();
            resolve(Info);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AddMerit = AddMerit;
//get all the merits
function GetMerits() {
    return new Promise((resolve, reject) => {
        try {
            MeritModel_1.default.find((error, results) => {
                error && reject(error);
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.GetMerits = GetMerits;
