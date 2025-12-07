import dotenv from "dotenv"
import express, { Application } from "express"
import cors from "cors"
import { userRouter } from "./app/module/user/user.route"
import { authRouter } from "./app/module/auth/auth.route"

dotenv.config()
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.get("/", (req, res) => {
    res.send("Travel Mates API is running with Typescript")
})

export default app;
