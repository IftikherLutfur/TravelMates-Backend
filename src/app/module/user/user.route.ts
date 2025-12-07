import express from "express"
import { userCOntroller } from "./user.controller";
const user = express.Router();

user.post("/userCreate", userCOntroller.userCreation)

export const userRouter = user;