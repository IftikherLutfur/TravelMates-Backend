"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = generateToken;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateToken(payload, secret, expiresIn) {
    const token = jsonwebtoken_1.default.sign(payload, secret, { expiresIn });
    return token;
}
async function verifyToken(token, secret) {
    const verifyToken = jsonwebtoken_1.default.verify(token, secret);
    return verifyToken;
}
//# sourceMappingURL=jwt.js.map