import jwt from "jsonwebtoken";
export default function auth(...requiredRoles) {
    return (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({ message: "Unauthorized user" });
            }
            const token = authHeader.split(" ")[1]; // Bearer TOKEN
            if (!token) {
                return res.status(401).json({ message: "Unauthorized user" });
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            if (requiredRoles.length > 0 &&
                !requiredRoles.includes(decoded.role)) {
                return res.status(403).json({
                    message: "Forbidden: access denied",
                });
            }
            next();
        }
        catch (error) {
            return res.status(401).json({ message: "Invalid token" });
        }
    };
}
