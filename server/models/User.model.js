import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            match: [/\S+@\S+\.\S+/, "Email format is invalid"],
        },
        username: {
            type: String, // Added `type` for the username field
            unique: true,
            minlength: [3, "Username shouldn't be less than 3 characters"],
            required: [true, "Username is required"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters long"], // Enforces minimum length
           
        },
        profilePicture: {
            type: String,
            default: "https://example.com/default-profile-pic.png",
        },
        bio: {
            type: String,
            maxlength: [160, "Bio cannot exceed 160 characters"],
        },
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);
const userModel = mongoose.model('User',userSchema)
export default userModel