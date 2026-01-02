import { Request, Response } from "express"
import { travelService } from "./travel.service"
import { sendResponse } from "../../../utils/resHelper"

const travelCreate = async (req: Request, res: Response) => {
    try {
        const user = req.user.email;
        const travel = await travelService.travelCreate(req.body, user)
        console.log(travel)
        sendResponse(res, {
            message: "Travel plane has been created",
            statusCode: 200,
            data: travel
        })
    } catch (error) {
        console.error("TRAVEL CREATE ERROR:", error);
        res.status(500).json({
            message: "Travel create failed",
            error,
        });
    }
}

const getAllTravel = async (req: Request, res: Response) => {
  try {
    const travel = await travelService.getAllTravel();

    sendResponse(res, {
      message: "Get all the travel",
      statusCode: 200,
      data: travel,
    });
  } catch (error) {
    console.error("GET ALL TRAVEL ERROR:", error);
    res.status(500).json({
      message: "Failed to get travel",
    });
  }
};


const getIndividualTravel = async (req: Request, res: Response) => {
  try {
    const email = req.user.email;
    const getIndividualTravel = await travelService.getIndividualTravel(email);
    sendResponse(res, {
            message: "Get all the travel",
            statusCode: 200,
            data: getIndividualTravel
        })
    } catch (error) {
        console.log(error)
    }
}

export const travelController = {
    travelCreate,
    getAllTravel,
    getIndividualTravel
}