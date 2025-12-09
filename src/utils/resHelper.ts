import { Response } from "express"

interface SendResponse<T> {
    statusCode?: number,
    message: string,
    data?: T
}

export const sendResponse = <T>(
    res: Response,
    payload: SendResponse<T>
) => {
    const { statusCode = 200, message, data } = payload
    return res.status(statusCode).json({
        success: true,
        message,
        data
    })
}