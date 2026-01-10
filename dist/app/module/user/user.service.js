"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("../../../lib/prisma");
const userCreation = async (payload) => {
    const hashedPassword = await bcryptjs_1.default.hash(payload.password, 10);
    const isUserExist = await prisma_1.prisma.user.findUnique({
        where: {
            email: payload.email
        }
    });
    if (isUserExist) {
        throw new Error("This email already taken");
    }
    const user = await prisma_1.prisma.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            role: payload.role,
            bio: payload.bio,
            currentLocation: payload.currentLocation,
            travelInterest: payload.travelInterest,
            visitedCountries: payload.visitedCountries,
            profileImage: payload.profileImage,
            password: hashedPassword,
        }
    });
    return user;
};
const getOwnUser = async (email) => {
    const user = await prisma_1.prisma.user.findUnique({
        where: {
            email: email
        }
    });
    return user;
};
const getAllUser = async (email) => {
    const isAdmin = await prisma_1.prisma.user.findUnique({
        where: {
            email: email
        }
    });
    if (isAdmin?.userStatus === "DEACTIVE") {
        throw new Error("This user is deactive");
    }
    if (isAdmin?.role !== "ADMIN") {
        throw new Error("This user is not a admin");
    }
    return await prisma_1.prisma.user.findMany();
};
const userFindByEmail = async (email) => {
    const findTheUser = await prisma_1.prisma.user.findUnique({
        where: {
            email: email
        }
    });
    return findTheUser;
};
const activeToDeactive = async (email, userId, status) => {
    const isAdmin = await prisma_1.prisma.user.findUnique({
        where: {
            email: email
        }
    });
    if (isAdmin?.userStatus === "DEACTIVE") {
        throw new Error("This user is deactive");
    }
    if (isAdmin?.role !== "ADMIN") {
        throw new Error("This user is not a admin");
    }
    return await prisma_1.prisma.user.update({
        where: {
            id: userId
        },
        data: {
            userStatus: status
        }
    });
};
const editUser = async (email, payload) => {
    const edit = await prisma_1.prisma.user.update({
        data: {
            bio: payload.bio,
            name: payload.name,
            currentLocation: payload.currentLocation,
            password: payload.password,
            profileImage: payload.profileImage,
            travelInterest: payload.travelInterest,
            visitedCountries: payload.visitedCountries,
        },
        where: {
            email: email
        }
    });
    return edit;
};
exports.userService = {
    userCreation,
    getOwnUser,
    userFindByEmail,
    editUser,
    getAllUser,
    activeToDeactive
};
//# sourceMappingURL=user.service.js.map