"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoute = void 0;
const express_1 = __importDefault(require("express"));
const payment_controller_1 = require("./payment.controller");
const isAuthorized_1 = __importDefault(require("../../../middleware/isAuthorized"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const payment = express_1.default.Router();
payment.post("/init", (0, isAuthorized_1.default)(prisma_1.Role.ADMIN, prisma_1.Role.USER), payment_controller_1.paymentController.initPaymentController);
payment.post("/success", (0, isAuthorized_1.default)(prisma_1.Role.ADMIN, prisma_1.Role.USER), payment_controller_1.paymentController.successController);
payment.post("/fail", (0, isAuthorized_1.default)(prisma_1.Role.ADMIN, prisma_1.Role.USER), payment_controller_1.paymentController.failController);
payment.post("/cancel", (0, isAuthorized_1.default)(prisma_1.Role.ADMIN, prisma_1.Role.USER), payment_controller_1.paymentController.cancelController);
exports.paymentRoute = payment;
//# sourceMappingURL=payment.route.js.map