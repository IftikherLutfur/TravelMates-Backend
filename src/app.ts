import dotenv from "dotenv"
import express, { Application } from "express"
import cors from "cors"

dotenv.config()
const app: Application = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Travel Mates API is running with Typescript")
})

export default app;
