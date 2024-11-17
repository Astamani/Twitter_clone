import express from "express";
import authRoutes from './routes/authRoutes.routes.js'
import { config as configDotenv } from "dotenv";
import connectMongoDB from "./db/connectToDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectMongoDB()
configDotenv()

app.use(express.json());

app.use("/api/auth", authRoutes);
// app.use("/api/login",loginRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' })
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
    connectMongoDB()
})
