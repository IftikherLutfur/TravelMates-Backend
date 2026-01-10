"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const prisma_1 = require("./lib/prisma");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 5000;
async function connectServer() {
    try {
        await prisma_1.prisma.$connect();
        console.log("DB connected");
        app_1.default.listen(port, () => {
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
//# sourceMappingURL=server.js.map