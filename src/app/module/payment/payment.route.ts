import express from "express"
import { paymentController } from "./payment.controller"
import auth from "../../../middleware/isAuthorized"
import { Role } from "../../../../prisma/generated/prisma"
const payment = express.Router()

payment.post("/init", auth(Role.ADMIN || Role.USER), paymentController.initPaymentController)
payment.post("/success", paymentController.successController)
payment.post("/fail", paymentController.failController)
payment.post("/cancel", paymentController.cancelController)

export const paymentRoute = payment;