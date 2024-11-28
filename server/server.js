import express from "express";
import authRoutes from './routes/authRoutes.routes.js'
import { config as configDotenv } from "dotenv";
import connectMongoDB from "./db/connectToDB.js";

// To load the env variable from .env
configDotenv()

// To connect with mongodb
connectMongoDB()


const app = express();
const PORT = process.env.PORT || 5000;

// middleware to parse JSON requests
app.use(express.json()); // to Parse req.body
app.use(express.urlencoded({ extended: true }))//to parse from data(req.body)

// Auth Routes
app.use("/api/auth", authRoutes);

//Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' })
})

//start the server on PORT
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})