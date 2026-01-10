export declare const paymentService: {
    initiatePayment: (user: string, price: number) => Promise<any>;
    validatePaymentService: (val_id: string, tran_id: string, status: string) => Promise<any>;
    transactionByIdService: (tran_id: string) => Promise<any>;
};
//# sourceMappingURL=payment.service.d.ts.map