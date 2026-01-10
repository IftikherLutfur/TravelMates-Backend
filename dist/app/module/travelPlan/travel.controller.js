"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.travelController = void 0;
const travel_service_1 = require("./travel.service");
const resHelper_1 = require("../../../utils/resHelper");
const travelCreate = async (req, res) => {
    try {
        const user = req.user.email;
        const travel = await travel_service_1.travelService.travelCreate(req.body, user);
        console.log(travel);
        (0, resHelper_1.sendResponse)(res, {
            message: "Travel plane has been created",
            statusCode: 200,
            data: travel
        });
    }
    catch (error) {
        console.error("TRAVEL CREATE ERROR:", error);
        res.status(500).json({
            message: "Travel create failed",
            error,
        });
    }
};
const getAllTravel = async (req, res) => {
    try {
        const travel = await travel_service_1.travelService.getAllTravel();
        (0, resHelper_1.sendResponse)(res, {
            message: "Get all the travel",
            statusCode: 200,
            data: travel,
        });
    }
    catch (error) {
        console.error("GET ALL TRAVEL ERROR:", error);
        res.status(500).json({
            message: "Failed to get travel",
        });
    }
};
const singleTravel = async (req, res) => {
    try {
        const id = req.params.id;
        const travel = await travel_service_1.travelService.singleTravel(id);
        (0, resHelper_1.sendResponse)(res, {
            message: "Retrived the single travel",
            statusCode: 200,
            data: travel,
        });
    }
    catch (error) {
        console.error("GET ALL TRAVEL ERROR:", error);
        res.status(500).json({
            message: "Failed to get travel",
        });
    }
};
const getIndividualTravel = async (req, res) => {
    try {
        const email = req.user.email;
        const getIndividualTravel = await travel_service_1.travelService.getIndividualTravel(email);
        (0, resHelper_1.sendResponse)(res, {
            message: "Get all the travel",
            statusCode: 200,
            data: getIndividualTravel
        });
    }
    catch (error) {
        console.log(error);
    }
};
const travelDelete = async (req, res) => {
    try {
        const email = req.user.email;
        const travelId = req.params.id;
        await travel_service_1.travelService.travelDelete(email, travelId);
        (0, resHelper_1.sendResponse)(res, {
            message: "Delete the travel",
            statusCode: 200,
            data: null
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.travelController = {
    travelCreate,
    getAllTravel,
    getIndividualTravel,
    singleTravel,
    travelDelete
};
//# sourceMappingURL=travel.controller.js.map