import { Response } from "express";
interface SendResponse<T> {
    statusCode?: number;
    message: string;
    data?: T;
}
export declare const sendResponse: <T>(res: Response, payload: SendResponse<T>) => Response<any, Record<string, any>>;
export {};
//# sourceMappingURL=resHelper.d.ts.map