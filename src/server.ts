import app from "./app";
import { prisma } from "./lib/prisma";

const port = process.env.PORT || 5000;

async function connectServer() {
    try {
        await prisma.$connect();
        console.log("DB connected")
        app.listen(port, () => {
            console.log(`Server is running on ${port}`)
            console.log(`\n======================================================`);
            console.log(`🚀 Server listening on port ${port}`);
            console.log(`Base URL for redirects: ${process.env.BASE_URL}`);
            console.log(`======================================================\n`);
            console.log('Endpoints:');
            console.log('POST /api/payment/init');
            console.log('POST /api/payment/success, /fail, /cancel');
            console.log('POST /api/payment/ipn');
        })
    } catch (error) {
        console.log("Connection failed ")
    }
}

connectServer()
