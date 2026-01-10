export const sendResponse = (res, payload) => {
    const { statusCode = 200, message, data } = payload;
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};
//# sourceMappingURL=resHelper.js.map