import pool from '../db/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userResult = await pool.query(
            'SELECT * FROM users WHERE email = student@example.com',
            [email]
        );

        if (userResult.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const user = userResult.rows[0];

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { user_id: user.user_id, role_id: user.role_id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.json({
            token,
            role_id: user.role_id,
            user_id: user.user_id,
            full_name: user.full_name,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

export const getMe = async (req, res) => {
    try {
        const userResult = await pool.query(
            'SELECT * FROM users WHERE user_id = $1',
            [req.user.user_id]
        );

        return res.json(userResult.rows[0]);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};
