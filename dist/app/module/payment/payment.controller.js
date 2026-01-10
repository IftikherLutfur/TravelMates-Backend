"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentController = void 0;
const payment_service_1 = require("./payment.service");
const resHelper_1 = require("../../../utils/resHelper");
const initPaymentController = async (req, res) => {
    try {
        const user = req.user.email;
        const { amount } = req.body;
        const result = await payment_service_1.paymentService.initiatePayment(user, amount);
        (0, resHelper_1.sendResponse)(res, {
            message: "Payment done",
            data: result.redirectGatewayURL
        });
    }
    catch (error) {
        console.error("Init payment error:", error);
        return res.status(500).json({ message: "Payment init failed" });
    }
};
const successController = async (req, res) => {
    try {
        const { val_id, tran_id, status } = req.body;
        console.log(val_id, tran_id, status);
        const validation = await payment_service_1.paymentService.validatePaymentService(val_id, tran_id, status);
        // save payment info in DB here
        return res.status(200).json({
            message: "Payment successful",
            data: validation,
        });
    }
    catch (error) {
        console.error("Payment success error:", error);
        return res.status(500).json({ message: "Payment validation failed" });
    }
};
const failController = async (_req, res) => {
    try {
        return res.status(400).json({ message: "Payment failed" });
    }
    catch (error) {
        console.error("Payment fail error:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
const cancelController = async (_req, res) => {
    try {
        return res.status(400).json({ message: "Payment cancelled" });
    }
    catch (error) {
        console.error("Payment cancel error:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
exports.paymentController = {
    initPaymentController,
    successController,
    failController,
    cancelController
};
//# sourceMappingURL=payment.controller.js.map