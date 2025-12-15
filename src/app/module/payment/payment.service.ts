
import SSLCommerzPayment from "sslcommerz-lts"
import { sslcommerzConfig } from "../../../utils/sslConfig"
import { prisma } from "../../../lib/prisma"

const sslcz = new SSLCommerzPayment(
    sslcommerzConfig.store_id,
    sslcommerzConfig.store_passwd,
    sslcommerzConfig.is_live
)

const initiatePayment = async (user: any) => {
    const currentUser = await prisma.user.findUnique({
        where:
        {
            email: user
        }
    })
    console.log(currentUser)

    // const tranId = "REF_" + Date.now()
    // await prisma.payment.create({
    //     data: {
    //         userId:" currentUser?.id",
    //         tranId,
    //         valId: "PENDING",
    //         amount: 100 as number,
    //         currency: "BDT",
    //         status: "PENDING",
    //     },
    // })
    const datas = {
        total_amount: 100,
        currency: "BDT",
        tran_id: "REF_" + Date.now(),
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
    }

    console.log(datas)
    return await sslcz.init(datas)
}

const validatePaymentService = async (val_id: string, tran_id: string, status: string) => {
    return await sslcz.validate({ val_id })
}

const transactionByIdService = async (tran_id: string) => {
    return await sslcz.transactionQueryByTransactionId({ tran_id })
}

export const paymentService = {
    initiatePayment,
    validatePaymentService,
    transactionByIdService
}