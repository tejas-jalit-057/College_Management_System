import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import studentRoutes from "./routes/student.routes.js";
import {facultyRoutes} from "./routes/faculty.routes.js"

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use('/api/faculty', facultyRoutes);


export default app;
