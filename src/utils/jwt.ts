import { JwtPayload, Secret, SignOptions } from "jsonwebtoken";
import jwt from "jsonwebtoken"

export default function generateToken(payload: any, secret: Secret, expiresIn: string) {
    const token = jwt.sign(payload, secret, { expiresIn } as SignOptions)
    return token
}

export async function verifyToken(token: string, secret: Secret) {
    const verifyToken = jwt.verify(token, secret) as JwtPayload
    return verifyToken
}