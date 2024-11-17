import mongoose from "mongoose";
import { config as configDotenv } from "dotenv";

configDotenv()

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Mongodb connected : ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error:${error.message}`)
        process.exit(1);
    }
}
export default connectMongoDB