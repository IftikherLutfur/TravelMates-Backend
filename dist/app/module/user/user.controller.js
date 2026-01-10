"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCOntroller = void 0;
const user_service_1 = require("./user.service");
const resHelper_1 = require("../../../utils/resHelper");
const userCreation = async (req, res) => {
    try {
        const user = await user_service_1.userService.userCreation(req.body);
        res.status(200).json({
            message: "User creation successful",
            data: user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error?.message });
    }
};
const getOwnUser = async (req, res) => {
    try {
        const email = req.user.email;
        const user = await user_service_1.userService.getOwnUser(email);
        (0, resHelper_1.sendResponse)(res, {
            statusCode: 200,
            message: "Got your account",
            data: user,
        });
    }
    catch (error) {
        console.error(error);
    }
};
// Get all user only for Admin
const getAllUser = async (req, res) => {
    try {
        const userEmail = req.user.email;
        const allUser = await user_service_1.userService.getAllUser(userEmail);
        (0, resHelper_1.sendResponse)(res, {
            message: "Here is all the  user data",
            statusCode: 200,
            data: allUser
        });
    }
    catch (error) {
        res.status(500).json({ message: error?.message });
    }
};
const activeToDeactive = async (req, res) => {
    try {
        const userEmail = req.user.email;
        const userId = req.params.id;
        const userStatus = req.body.userStatus;
        const userStatusEdit = await user_service_1.userService.activeToDeactive(userEmail, userId, userStatus);
        (0, resHelper_1.sendResponse)(res, {
            message: "User status has been updated",
            statusCode: 200,
            data: userStatusEdit
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
const userFindByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const singleUser = await user_service_1.userService.userFindByEmail(email);
        (0, resHelper_1.sendResponse)(res, {
            message: "User retrived by the email",
            statusCode: 200,
            data: singleUser
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
const editUser = async (req, res) => {
    try {
        const email = req.user.email;
        const edit = await user_service_1.userService.editUser(email, req.body);
        (0, resHelper_1.sendResponse)(res, {
            message: "Your profile has been updated",
            statusCode: 200,
            data: edit
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.userCOntroller = {
    userCreation,
    getOwnUser,
    userFindByEmail,
    editUser,
    getAllUser,
    activeToDeactive
};
//# sourceMappingURL=user.controller.js.map