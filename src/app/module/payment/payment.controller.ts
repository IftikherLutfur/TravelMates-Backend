import { Request, Response } from "express"
import { paymentService } from "./payment.service"
import { sendResponse } from "../../../utils/resHelper"
import { prisma } from "../../../lib/prisma";

const initPaymentController = async (req: Request, res: Response) => {
    try {
        const user = req.user.email;
        const result = await paymentService.initiatePayment(user)
        sendResponse(res, {
            message: "Payment done",
            data: result
        })
    } catch (error) {
        return res.status(500).json({ message: "Payment init failed" })
    }
}

const successController = async (req: Request, res: Response) => {
    const { val_id, tran_id, status } = req.body
    const validation = await paymentService.validatePaymentService(val_id, tran_id, status)

    // save payment info in DB here
    await prisma.payment.update
    ({
        where: { tranId: tran_id },
        data: {
            valId: validation.val_id,
            status: "SUCCESS",
            rawResponse: validation,
        },
    })
    res.json({
        message: "Payment successful",
        data: validation,
    })
}

const failController = (_req: Request, res: Response) => {
    res.json({ message: "Payment failed" })
}

const cancelController = (_req: Request, res: Response) => {
    res.json({ message: "Payment cancelled" })
}

export const paymentController = {
    initPaymentController,
    successController,
    failController,
    cancelController

}