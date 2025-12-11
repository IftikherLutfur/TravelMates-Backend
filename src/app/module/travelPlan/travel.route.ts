import express from "express"
import { travelController } from "./travel.controller";
import auth from "../../../middleware/isAuthorized";
import { Role } from "../../../../prisma/generated/prisma";

const travel = express.Router()
travel.post("/create", auth(Role.USER), travelController.travelCreate)
travel.get("/allTravel", travelController.getAllTravel)
export const travelRouter = travel; 