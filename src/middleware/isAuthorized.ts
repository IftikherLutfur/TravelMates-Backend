import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { Role } from "../../prisma/generated/prisma";

export default function auth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(200).json({ message: "Unauthorized user" })
        }
        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        )

        req.user = decode;
        next()
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" })
    }
}

export type IJWTPayload = {
    email: string;
    role: Role;
}