import { Request, Response } from "express"
import { userService } from "./user.service"
import { sendResponse } from "../../../utils/resHelper"

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


const editUser = async (req: Request, res: Response) => {
  try {
    const email = req.user.email;
    const edit = await userService.editUser(email, req.body)
    sendResponse(res, {
      message: "Your profile has been updated",
      statusCode: 200,
      data: edit
    })
  } catch (error) {
    console.log(error)
  }
}

export const userCOntroller = {
  userCreation,
  getOwnUser,
  editUser
}