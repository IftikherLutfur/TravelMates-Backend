// sslcommerz.d.ts

declare module 'sslcommerz-lts' {
    export class SSLCommerzPayment {
        constructor(storeId: string, storePasswd: string, isLive: boolean);
        
        /** Initiates the payment session and returns the gateway URL. */
        init(data: any): Promise<{ GatewayPageURL: string, status: string, failedreason?: string }>;

        /** Validates the transaction using the val_id. */
        validate(data: { val_id: string }): Promise<any>;
        
        // You can add more methods as you use them (e.g., refund)
        // initiateRefund(data: any): Promise<any>;
    }
}