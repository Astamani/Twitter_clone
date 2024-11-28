import Joi from "joi";

// Signup validator for clean and robust code
export const signupValidator = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
        "string.empty": "Name is required",
        "string.min": "Name should have at least 3 characters",
        "string.max": "Name should have at most 50 characters",
    }),
    username: Joi.string().min(3).max(20).required().messages({
        "string.empty": "Username is required",
        "string.min": "Username should have at least 3 characters",
        "string.max": "Username should have at most 20 characters",
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email format",
    }),
    password: Joi.string()
        .pattern(
            new RegExp(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
            )
        )
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.pattern.base":
                "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character",
        }),
});

// Login validator for clean and robust code
export const loginValidator = Joi.object({
    email: Joi.string().email().required().messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email format", // Corrected "formate" to "format"
    }),
    password: Joi.string().required().messages({
        "string.empty": "Password is required",
    }),
});
