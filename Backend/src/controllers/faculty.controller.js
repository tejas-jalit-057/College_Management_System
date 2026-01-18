// controllers/facultyController.js
import db from "../db/index.js"; // make sure db/index.js has a default export

const handleError = (res, error) => {
  console.error(error);
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

export const createFaculty = async (req, res) => {
  try {
    const { user_id, department, designation, joining_date } = req.body;

    if (!user_id || !department || !designation || !joining_date) {
      return res.status(400).json({
        status: "fail",
        message:
          "user_id, department, designation and joining_date are required",
      });
    }

    const result = await db.query(
      `INSERT INTO faculty (user_id, department, designation, joining_date)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [user_id, department, designation, joining_date],
    );

    return res.status(201).json({
      status: "success",
      data: result.rows[0],
    });
  } catch (error) {
    return handleError(res, error);
  }
};

export const getAllFaculty = async (req, res) => {
  try {
    const result = await db.query(
      `SELECT f.*, u.full_name, u.email
       FROM faculty f
       JOIN users u ON f.user_id = u.user_id`,
    );

    return res.status(200).json({
      status: "success",
      results: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    return handleError(res, error);
  }
};

export const getFacultyById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid faculty id",
      });
    }

    const result = await db.query(
      `SELECT f.*, u.full_name, u.email
       FROM faculty f
       JOIN users u ON f.user_id = u.user_id
       WHERE f.id = $1`,
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Faculty not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: result.rows[0],
    });
  } catch (error) {
    return handleError(res, error);
  }
};

export const updateFaculty = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { department, designation } = req.body;

    if (Number.isNaN(id)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid faculty id",
      });
    }

    const result = await db.query(
      `UPDATE faculty
       SET department = $1,
           designation = $2
       WHERE id = $3
       RETURNING *`,
      [department, designation, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Faculty not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: result.rows[0],
    });
  } catch (error) {
    return handleError(res, error);
  }
};

export const deleteFaculty = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid faculty id",
      });
    }

    const result = await db.query(
      `DELETE FROM faculty
       WHERE id = $1
       RETURNING id`,
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Faculty not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Faculty deleted",
    });
  } catch (error) {
    return handleError(res, error);
  }
};