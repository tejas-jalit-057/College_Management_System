import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";
import pool from "../db/index.js";




// const users = [
//     {
//         id: 1,
//         email: "admin@gmail.com",
//         password: "",
//         role: "admin"
//     },
//     {
//         id: 2,
//         email: "student@gmail.com",
//         password: "",
//         role: "student"
//     }
// ];



// const createPasswords = async () => {
//     users[0].password = await bcrypt.hash("1234", 10);
//     users[1].password = await bcrypt.hash("1234", 10);
// };
// createPasswords();





export const login = async (req, res) => {
    const { email, password } = req.body;


    const result = await pool.query(
        "SELECT * FROM users WHERE email = $1",        // gets user from the database
        [email]
    );

    if (result.rows.length === 0) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = result.rows[0];

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    // const user = users.find(u => u.email === email);
    // if (!user) {
    //     return res.status(401).json({ message: "Wrong email" });
    // }

    // const match = await bcrypt.compare(password, user.password);
    // if (!match) {
    //     return res.status(401).json({ message: "Wrong password" });
    // }

    const token = generateToken({
        id: user.id,
        role: user.role
    });

    res.cookie("token", token, { httpOnly: true });

    res.json({ message: "Login success" });
};