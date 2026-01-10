import { userService } from "./user.service";
import { sendResponse } from "../../../utils/resHelper";
const userCreation = async (req, res) => {
    try {
        const user = await userService.userCreation(req.body);
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
        const user = await userService.getOwnUser(email);
        sendResponse(res, {
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
        const allUser = await userService.getAllUser(userEmail);
        sendResponse(res, {
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
        const userStatusEdit = await userService.activeToDeactive(userEmail, userId, userStatus);
        sendResponse(res, {
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
        const singleUser = await userService.userFindByEmail(email);
        sendResponse(res, {
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
        const edit = await userService.editUser(email, req.body);
        sendResponse(res, {
            message: "Your profile has been updated",
            statusCode: 200,
            data: edit
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const userCOntroller = {
    userCreation,
    getOwnUser,
    userFindByEmail,
    editUser,
    getAllUser,
    activeToDeactive
};
//# sourceMappingURL=user.controller.js.map