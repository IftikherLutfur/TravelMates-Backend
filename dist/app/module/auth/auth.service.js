"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("../../../lib/prisma");
const jwt_1 = __importDefault(require("../../../utils/jwt"));
const login = async (payload) => {
    const user = await prisma_1.prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });
    // 2️⃣ user না থাকলে
    if (!user) {
        throw new Error("User not found");
    }
    // 3️⃣ password match
    const isPasswordMatch = await bcryptjs_1.default.compare(payload.password, user.password);
    // 4️⃣ password ভুল হলে
    if (!isPasswordMatch) {
        throw new Error("Invalid credentials");
    }
    const accessToken = (0, jwt_1.default)({ email: user.email, role: user.role }, process.env.JWT_SECRET, process.env.JWT_EXPIRES);
    const refreshToken = (0, jwt_1.default)({ email: user.email, role: user.role }, process.env.JWT_SECRET, process.env.JWT_EXPIRES);
    const { ...userWithoutPassword } = user;
    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
        data: userWithoutPassword
    };
};
exports.authService = {
    login
};
//# sourceMappingURL=auth.service.js.map