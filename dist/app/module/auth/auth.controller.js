import { authService } from "./auth.service";
import { sendResponse } from "../../../utils/resHelper";
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userLog = await authService.login({ email, password });
        const { accessToken, refreshToken } = userLog;
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 1000 * 60 * 60
        });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 1000 * 60 * 60
        });
        sendResponse(res, {
            message: "Successfully loges in",
            statusCode: 200,
            data: {
                accessToken,
                refreshToken
            }
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
const logout = async (req, res) => {
    try {
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        });
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        });
        sendResponse(res, {
            message: "Loged out successful",
            statusCode: 200
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred during logout"
        });
    }
};
export const authController = {
    login,
    logout
};
//# sourceMappingURL=auth.controller.js.map