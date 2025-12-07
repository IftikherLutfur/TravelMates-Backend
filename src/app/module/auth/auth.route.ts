import express from "express"
import { authController } from "./auth.controller";
const auth = express.Router()

auth.post("/login", authController.login)

export const authRouter = auth;