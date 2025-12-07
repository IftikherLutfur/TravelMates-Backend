import { NextFunction, Request, Response } from "express"
import { userService } from "./user.service"

const userCreation = async (req: Request, res: Response) => {
    try {
        const user = await userService.userCreation(req.body)
        res.status(200).json({
            message: "User creation successful",
            data: user
        })
    } catch (error) {
        console.log(error)
    }
}

export const userCOntroller = {
    userCreation
}