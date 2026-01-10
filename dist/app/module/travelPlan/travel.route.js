import express from "express";
import { travelController } from "./travel.controller";
import auth from "../../../middleware/isAuthorized";
import { Role } from "../../../../prisma/generated/prisma";
const travel = express.Router();
travel.get("/", travelController.getAllTravel);
travel.get("/myTravels", auth(Role.USER), travelController.getIndividualTravel);
travel.get("/:id", travelController.singleTravel);
travel.post("/create", auth(Role.USER), travelController.travelCreate);
travel.delete("/:id", auth(Role.ADMIN, Role.USER), travelController.travelDelete);
export const travelRouter = travel;
//# sourceMappingURL=travel.route.js.map