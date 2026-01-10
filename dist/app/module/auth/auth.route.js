import express from "express";
import { authController } from "./auth.controller";
const auth = express.Router();
auth.post("/login", authController.login);
auth.post("/logout", authController.logout);
export const authRouter = auth;
//# sourceMappingURL=auth.route.js.map