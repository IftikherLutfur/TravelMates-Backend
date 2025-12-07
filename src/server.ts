import app from "./app";
import { prisma } from "./lib/prisma";

const port = process.env.PORT || 5000;

async function connectServer() {
    try {
        await prisma.$connect();
        console.log("DB connected")
        app.listen(port, () => {
            console.log(`Server is running on ${port}`)
        })
    } catch (error) {
        console.log("Connection failed ")
    }
}

connectServer()
