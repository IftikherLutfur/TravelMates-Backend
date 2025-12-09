import { NextFunction, Request, Response } from "express"
import { userService } from "./user.service"
import { sendResponse } from "../../../utils/resHelper"
import { IJWTPayload } from "../../../middleware/isAuthorized"

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

const getOwnUser = async (req: Request, res: Response) => {
  try {
    const email = req.user.email;

    const user = await userService.getOwnUser(email);

    sendResponse(res, {
      statusCode: 200,
      message: "Got your account",
      data: user,
    });
  } catch (error) {
    console.error(error);
  }
};


export const userCOntroller = {
    userCreation,
    getOwnUser
}