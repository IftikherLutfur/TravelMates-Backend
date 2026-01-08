import app from "../src/app"; // file import specify korte hobe
import { prisma } from "./lib/prisma";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
async function connectServer() {
    try {
        await prisma.$connect();
        console.log("DB connected");
        app.listen(port, () => {
            console.log(`\n======================================================`);
            console.log(`🚀 Server listening on port ${port}`);
            console.log(`Base URL for redirects: ${process.env.BASE_URL}`);
            console.log(`======================================================\n`);
        });
    }
    catch (error) {
        console.log("Connection failed", error);
    }
}
connectServer();
