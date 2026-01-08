import jwt from "jsonwebtoken";
export default function generateToken(payload, secret, expiresIn) {
    const token = jwt.sign(payload, secret, { expiresIn });
    return token;
}
export async function verifyToken(token, secret) {
    const verifyToken = jwt.verify(token, secret);
    return verifyToken;
}
