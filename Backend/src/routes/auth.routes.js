import express from "express";
import { login } from "../controllers/auth.controller.js";
import authMiddleware from '../middleware/auth.middleware.js'
import  roleMiddleware  from "../middleware/role.middleware.js";


const router = express.Router();

router.post("/login", login);

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route",
    user: req.user,
  });
});

router.get("/admin", authMiddleware, roleMiddleware("admin"), (req, res) => {
  res.json({ message: "Welcome admin" });
});

export default router;