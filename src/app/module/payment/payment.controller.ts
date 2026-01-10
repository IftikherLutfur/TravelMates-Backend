import { Request, Response } from "express"
import { paymentService } from "./payment.service"
import { sendResponse } from "../../../utils/resHelper"

const initPaymentController = async (req: Request, res: Response) => {
    try {
        const user = req.user.email
        const { amount } = req.body

        const result = await paymentService.initiatePayment(user, amount)

        sendResponse(res, {
            message: "Payment done",
            data: result.redirectGatewayURL
        })
    } catch (error) {
        console.error("Init payment error:", error)
        return res.status(500).json({ message: "Payment init failed" })
    }
}

const successController = async (req: Request, res: Response) => {
    try {
        const { val_id, tran_id, status } = req.body
        console.log(val_id, tran_id, status)

        const validation = await paymentService.validatePaymentService(
            val_id,
            tran_id,
            status
        )

        // save payment info in DB here

        return res.status(200).json({
            message: "Payment successful",
            data: validation,
        })
    } catch (error) {
        console.error("Payment success error:", error)
        return res.status(500).json({ message: "Payment validation failed" })
    }
}

const failController = async (_req: Request, res: Response) => {
    try {
        return res.status(400).json({ message: "Payment failed" })
    } catch (error) {
        console.error("Payment fail error:", error)
        return res.status(500).json({ message: "Something went wrong" })
    }
}

const cancelController = async (_req: Request, res: Response) => {
    try {
        return res.status(400).json({ message: "Payment cancelled" })
    } catch (error) {
        console.error("Payment cancel error:", error)
        return res.status(500).json({ message: "Something went wrong" })
    }
}

export const paymentController = {
    initPaymentController,
    successController,
    failController,
    cancelController
}
