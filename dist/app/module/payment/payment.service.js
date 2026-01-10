"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentService = void 0;
const sslcommerz_lts_1 = __importDefault(require("sslcommerz-lts"));
const uuid_1 = require("uuid");
const sslConfig_1 = require("../../../utils/sslConfig");
const prisma_1 = require("../../../lib/prisma");
const sslcz = new sslcommerz_lts_1.default(sslConfig_1.sslcommerzConfig.store_id, sslConfig_1.sslcommerzConfig.store_passwd, sslConfig_1.sslcommerzConfig.is_live);
const initiatePayment = async (user, price) => {
    const currentUser = await prisma_1.prisma.user.findUnique({
        where: {
            email: user
        }
    });
    if (!currentUser) {
        throw new Error("User not found");
    }
    const unidqueId = (0, uuid_1.v4)();
    const tranId = "REF_" + unidqueId;
    await prisma_1.prisma.payment.create({
        data: {
            userId: currentUser.id,
            tranId,
            valId: "validId" + unidqueId,
            amount: price,
            currency: "BDT",
            status: "COMPLETED",
        },
    });
    const datas = {
        total_amount: price,
        currency: "BDT",
        tran_id: tranId,
        success_url: `http://localhost:3000/Payment/success`,
        fail_url: `http://localhost:3000/Payment/fail`,
        cancel_url: `http://localhost:3000/Payment/cancel`,
        ipn_url: `http://localhost:3000/Payment/ipn`,
        shipping_method: "Courier",
        product_name: "Travel Subscription",
        product_category: "Service",
        product_profile: "general",
        cus_name: currentUser?.name,
        cus_email: currentUser?.email,
        cus_add1: "Dhaka",
        cus_city: "Dhaka",
        cus_country: "Bangladesh",
        cus_phone: "01711111111",
        // ✅ REQUIRED (missing in your request)
        ship_name: "Customer Name",
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: "1000",
        ship_country: "Bangladesh",
    };
    await prisma_1.prisma.user.update({
        where: {
            email: user
        },
        data: {
            isPremium: true
        }
    });
    // console.log(datas)
    return await sslcz.init(datas);
};
const validatePaymentService = async (val_id, tran_id, status) => {
    const payment = await prisma_1.prisma.payment.findUnique({
        where: {
            tranId: tran_id
        }
    });
    console.log(payment);
    await prisma_1.prisma.payment.update({
        where: { tranId: tran_id },
        data: {
            valId: payment?.valId,
            status: "SUCCESS",
        },
    });
    return await sslcz.validate({ val_id, tran_id, status });
};
const transactionByIdService = async (tran_id) => {
    return await sslcz.transactionQueryByTransactionId({ tran_id });
};
exports.paymentService = {
    initiatePayment,
    validatePaymentService,
    transactionByIdService
};
//# sourceMappingURL=payment.service.js.map