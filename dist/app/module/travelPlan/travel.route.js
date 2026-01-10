"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.travelRouter = void 0;
const express_1 = __importDefault(require("express"));
const travel_controller_1 = require("./travel.controller");
const isAuthorized_1 = __importDefault(require("../../../middleware/isAuthorized"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const travel = express_1.default.Router();
travel.get("/", travel_controller_1.travelController.getAllTravel);
travel.get("/myTravels", (0, isAuthorized_1.default)(prisma_1.Role.USER), travel_controller_1.travelController.getIndividualTravel);
travel.get("/:id", travel_controller_1.travelController.singleTravel);
travel.post("/create", (0, isAuthorized_1.default)(prisma_1.Role.USER), travel_controller_1.travelController.travelCreate);
travel.delete("/:id", (0, isAuthorized_1.default)(prisma_1.Role.ADMIN, prisma_1.Role.USER), travel_controller_1.travelController.travelDelete);
exports.travelRouter = travel;
//# sourceMappingURL=travel.route.js.map