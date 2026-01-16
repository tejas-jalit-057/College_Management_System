import pool from "../db/index.js";
import { generateToken } from "../utils/jwt.js";

export const login = async (req, res) => {
    const { email, password } = req.body;

    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (result.rows.length === 0)
        return res.status(401).json({ message: "Invalid email or password" });

    const user = result.rows[0];

    // For now plain password check (replace with bcrypt later)
    if (password !== user.password) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const payload = {
        user_id: user.user_id,
        role_id: user.role_id
    };

    const token = generateToken(payload);

    res
        .cookie("token", token, { httpOnly: true })
        .json({ message: "Login successful", user: { user_id: user.user_id, role_id: user.role_id }, token });
};
