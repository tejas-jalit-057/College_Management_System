import { verifyToken } from "../utils/jwt.js";

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "No token" });
    }

    const decoded = verifyToken(token);

    req.user = decoded;
    next();
};
export default authMiddleware;
