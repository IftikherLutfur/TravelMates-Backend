import { paymentService } from "./payment.service";
import { sendResponse } from "../../../utils/resHelper";
const initPaymentController = async (req, res) => {
    try {
        const user = req.user.email;
        const { amount } = req.body;
        const result = await paymentService.initiatePayment(user, amount);
        sendResponse(res, {
            message: "Payment done",
            data: result.redirectGatewayURL
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Payment init failed" });
    }
};
const successController = async (req, res) => {
    const { val_id, tran_id, status } = req.body;
    console.log(val_id, tran_id, status);
    const validation = await paymentService.validatePaymentService(val_id, tran_id, status);
    // save payment info in DB here
    res.json({
        message: "Payment successful",
        data: validation,
    });
};
const failController = (_req, res) => {
    res.json({ message: "Payment failed" });
};
const cancelController = (_req, res) => {
    res.json({ message: "Payment cancelled" });
};
export const paymentController = {
    initPaymentController,
    successController,
    failController,
    cancelController
};
