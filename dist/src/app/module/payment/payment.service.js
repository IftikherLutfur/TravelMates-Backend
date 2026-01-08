import SSLCommerzPayment from "sslcommerz-lts";
import { v4 as uuidv4 } from 'uuid';
import { sslcommerzConfig } from "../../../utils/sslConfig";
import { prisma } from "../../../lib/prisma";
const sslcz = new SSLCommerzPayment(sslcommerzConfig.store_id, sslcommerzConfig.store_passwd, sslcommerzConfig.is_live);
const initiatePayment = async (user, price) => {
    const currentUser = await prisma.user.findUnique({
        where: {
            email: user
        }
    });
    if (!currentUser) {
        throw new Error("User not found");
    }
    const unidqueId = uuidv4();
    const tranId = "REF_" + unidqueId;
    await prisma.payment.create({
        data: {
            userId: currentUser.id,
            tranId,
            valId: "validId" + unidqueId,
            amount: price,
            currency: "BDT",
            status: "PENDING",
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
    await prisma.user.update({
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
    const payment = await prisma.payment.findUnique({
        where: {
            tranId: tran_id
        }
    });
    console.log(payment);
    await prisma.payment.update({
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
export const paymentService = {
    initiatePayment,
    validatePaymentService,
    transactionByIdService
};
