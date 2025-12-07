import { NextFunction, Request, Response } from "express"
import { authService } from "./auth.service"

const login = async (req: Request, res: Response) => {
    try {
        const login = await authService.login(req.body)
        res.status(200).json({
            message: "Successfully loges in",
            data: login
        })
    } catch (error) {
        console.log(error)
    }
}

export const authController = {
    login
}