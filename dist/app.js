"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./app/module/user/user.route");
const auth_route_1 = require("./app/module/auth/auth.route");
const travel_route_1 = require("./app/module/travelPlan/travel.route");
const payment_route_1 = require("./app/module/payment/payment.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/user", user_route_1.userRouter);
app.use("/api/auth", auth_route_1.authRouter);
app.use("/api/travel", travel_route_1.travelRouter);
app.use("/api/payment", payment_route_1.paymentRoute);
app.get("/", (req, res) => {
    res.send("Travel Mates API is running with Typescript");
});
exports.default = app;
//# sourceMappingURL=app.js.map