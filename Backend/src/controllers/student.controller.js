import pool from "../db/index.js";

export const createStudent = async (req, res) => {
    const { user_id, roll_no, department, year, division, name } = req.body;

    const result = await pool.query(
        `INSERT INTO students (user_id, roll_no, department, year, division, name) 
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [user_id, roll_no, department, year, division, name]
    );

    res.status(201).json({ message: "Student created", student: result.rows[0] });
};


export const getStudents = async (req, res) => {
    const result = await pool.query("SELECT * FROM students");
    res.json(result.rows);
};
