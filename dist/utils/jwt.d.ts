import { JwtPayload, Secret } from "jsonwebtoken";
export default function generateToken(payload: any, secret: Secret, expiresIn: string): string;
export declare function verifyToken(token: string, secret: Secret): Promise<JwtPayload>;
//# sourceMappingURL=jwt.d.ts.map