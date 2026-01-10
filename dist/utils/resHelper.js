"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, payload) => {
    const { statusCode = 200, message, data } = payload;
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};
exports.sendResponse = sendResponse;
//# sourceMappingURL=resHelper.js.map