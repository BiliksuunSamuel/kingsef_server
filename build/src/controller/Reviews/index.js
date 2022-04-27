"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAdminPostController = exports.UpdateAdminPostController = exports.GetAdminCommentsController = exports.AddAdminCommentsController = void 0;
var AdminAddReviewController_1 = require("./AdminAddReviewController");
Object.defineProperty(exports, "AddAdminCommentsController", { enumerable: true, get: function () { return __importDefault(AdminAddReviewController_1).default; } });
var GetAdminCommentsController_1 = require("./GetAdminCommentsController");
Object.defineProperty(exports, "GetAdminCommentsController", { enumerable: true, get: function () { return __importDefault(GetAdminCommentsController_1).default; } });
var UpdateAdminPostController_1 = require("./UpdateAdminPostController");
Object.defineProperty(exports, "UpdateAdminPostController", { enumerable: true, get: function () { return __importDefault(UpdateAdminPostController_1).default; } });
var DeleteAdminPostController_1 = require("./DeleteAdminPostController");
Object.defineProperty(exports, "DeleteAdminPostController", { enumerable: true, get: function () { return __importDefault(DeleteAdminPostController_1).default; } });
