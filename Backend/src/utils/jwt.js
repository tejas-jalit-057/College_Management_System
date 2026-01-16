import jwt from "jsonwebtoken";

const JWT_SECRET = "your_super_secret_key"; // Replace with strong secret or use process.env.JWT_SECRET

// Generate token
export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
};

// Verify token
export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};
