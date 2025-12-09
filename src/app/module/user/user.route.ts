import express from "express"
import { userCOntroller } from "./user.controller";
import auth from "../../../middleware/isAuthorized";
const user = express.Router();

user.post("/userCreate", userCOntroller.userCreation)
user.get("/me", auth, userCOntroller.getOwnUser)
user.patch("/update-profile", auth, userCOntroller.editUser)

export const userRouter = user;