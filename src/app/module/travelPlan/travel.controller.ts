import { Request, Response } from "express"
import { travelService } from "./travel.service"
import { sendResponse } from "../../../utils/resHelper"

const travelCreate = async (req: Request, res: Response) => {
    try {
        const travel = await travelService.travelCreate(req.body)
        sendResponse(res, {
            message: "Travel plane has been created",
            statusCode: 200,
            data: travel
        })
    } catch (error) {

    }
}

const getAllTravel = async (req: Request, res: Response) => {
    try {
        const travel = await travelService.getAllTravel()
        sendResponse(res, {
            message: "Get all the travel",
            statusCode: 200,
            data: travel
        })
    } catch (error) {
        console.log(error)
    }

}

export const travelController = {
    travelCreate,
    getAllTravel
}