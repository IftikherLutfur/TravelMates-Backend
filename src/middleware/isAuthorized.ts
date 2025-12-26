import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import { Role } from "../../prisma/generated/prisma";

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export default function auth(...requiredRoles: Role[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const authHeader = req.headers.authorization;

            if (!authHeader) {
                return res.status(401).json({ message: "Unauthorized user" });
            }

            const token = authHeader.split(" ")[1]; // Bearer TOKEN

            if (!token) {
                return res.status(401).json({ message: "Unauthorized user" });
            }

            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET as string
            ) as JwtPayload;

            req.user = decoded;

            if (
                requiredRoles.length > 0 &&
                !requiredRoles.includes(decoded.role)
            ) {
                return res.status(403).json({
                    message: "Forbidden: access denied",
                });
            }

            next();
        } catch (error) {
            return res.status(401).json({ message: "Invalid token" });
        }
    };
}

export type IJWTPayload = {
    email: string;
    role: Role;
}