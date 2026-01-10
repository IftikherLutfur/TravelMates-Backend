import { NextFunction, Request, Response } from "express";
import { Role } from "../../prisma/generated/prisma";
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}
export default function auth(...requiredRoles: Role[]): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export type IJWTPayload = {
    email: string;
    role: Role;
};
//# sourceMappingURL=isAuthorized.d.ts.map