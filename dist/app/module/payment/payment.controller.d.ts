import { Request, Response } from "express";
export declare const paymentController: {
    initPaymentController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    successController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    failController: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    cancelController: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=payment.controller.d.ts.map