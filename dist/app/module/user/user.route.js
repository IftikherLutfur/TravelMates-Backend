"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const isAuthorized_1 = __importDefault(require("../../../middleware/isAuthorized"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const user = express_1.default.Router();
user.get("/me", (0, isAuthorized_1.default)(prisma_1.Role.ADMIN, prisma_1.Role.USER), user_controller_1.userCOntroller.getOwnUser);
user.get("/get-all-user", (0, isAuthorized_1.default)(prisma_1.Role.ADMIN), user_controller_1.userCOntroller.getAllUser);
user.get("/:email", user_controller_1.userCOntroller.userFindByEmail);
user.post("/userCreate", user_controller_1.userCOntroller.userCreation);
user.patch("/userStatus/:id", (0, isAuthorized_1.default)(prisma_1.Role.ADMIN), user_controller_1.userCOntroller.activeToDeactive);
user.patch("/update-profile", (0, isAuthorized_1.default)(prisma_1.Role.ADMIN, prisma_1.Role.USER), user_controller_1.userCOntroller.editUser);
exports.userRouter = user;
//# sourceMappingURL=user.route.js.map