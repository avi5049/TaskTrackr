import dotenv from "dotenv"
dotenv.config({
    path: './.env'
});

import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import { router as authRoutes } from "./routes/authRoutes.js"
import { router as taskRoutes} from "./routes/taskRoutes.js"
import { router as userRoutes } from "./routes/userRoutes.js"
import { router as reportRoutes } from "./routes/reportRoutes.js"
import connectDB from "./config/db.js"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

//Middleware to handle cors
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["content-type", "Authorization"],
    })
);

//Connect Database
connectDB()

//Middleware
app.use(express.json());



//Routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/tasks", taskRoutes)
app.use("/api/reports", reportRoutes)


//Server Upload folder
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
});