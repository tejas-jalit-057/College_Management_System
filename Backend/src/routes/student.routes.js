import express from "express";
import { createStudent, getStudents } from "../controllers/student.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { roleMiddleware } from "../middleware/role.middleware.js";

const router = express.Router();

// Example: role_id 1 = admin, 2 = faculty
router.post("/", authMiddleware, roleMiddleware([1, 2]), createStudent);
router.get("/", authMiddleware, roleMiddleware([1, 2, 3]), getStudents); // allow more roles to view

export default router;
