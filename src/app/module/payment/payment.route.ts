import express from "express"
import { paymentController } from "./payment.controller"
import auth from "../../../middleware/isAuthorized"
import { Role } from "../../../../prisma/generated/prisma"
const payment = express.Router()

payment.post("/init", auth(Role.ADMIN, Role.USER), paymentController.initPaymentController)
payment.post("/success", auth(Role.ADMIN, Role.USER), paymentController.successController)
payment.post("/fail", auth(Role.ADMIN, Role.USER), paymentController.failController)
payment.post("/cancel", auth(Role.ADMIN, Role.USER), paymentController.cancelController)

export const paymentRoute = payment;