"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const auth = express_1.default.Router();
auth.post("/login", auth_controller_1.authController.login);
auth.post("/logout", auth_controller_1.authController.logout);
exports.authRouter = auth;
//# sourceMappingURL=auth.route.js.map