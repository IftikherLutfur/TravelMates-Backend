import dotenv from "dotenv"
import express, { Application } from "express"
import cors from "cors"
import { userRouter } from "./app/module/user/user.route"
import { authRouter } from "./app/module/auth/auth.route"
import { travelRouter } from "./app/module/travelPlan/travel.route"
import { paymentRoute } from "./app/module/payment/payment.route"

dotenv.config()
const app: Application = express()

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true, // 👈 important for cookies
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    })
);
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/travel", travelRouter)
app.use("/api/payment", paymentRoute)

app.get("/", (req, res) => {
    res.send("Travel Mates API is running with Typescript")
})

export default app;
