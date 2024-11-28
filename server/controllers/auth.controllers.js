import userModel from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../lib/util/generateToken.js"
export const signup = async (req, res) => {
    try {
        const { name, username, password, email } = req.body
        const existingUsername = await userModel.findOne({ username });
        const existingEmail = await userModel.findOne({ email });
        if (existingUsername) {
            return res.status(400).json({ error: "Username is already in use",er:error.message })
        }
        if (existingEmail) {
            return res.status(400).json({ error: "Email is already in use" })
        }

        // hash password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //create new user
        const newUser = new userModel({ name, username, password: hashedPassword, email })
        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()
            res.status(201).json({
                name: newUser.name,
                email: newUser.email,
                username: newUser.username
            })
        }
        else {
            res.status(500).json({
                error: 'Invalid User data'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error in Singup controller',
            error: error.message
        })
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        //find user
        const user = await userModel.findOne({ email })
        if (!user) {
           return res.status(400).json({ message: 'Invalid Email or password' })
        }

        //match password
        const passMatch = await bcrypt.compare(password, user.password)

        if (!passMatch) {
           return res.status(400).json({ message: 'Invalid Email or password' })
        }
        // generate token
        generateTokenAndSetCookie(user._id,res)
        res.status(200).json({ message: 'You have succesfully LogedIn' })

    } catch (error) {
        res.status(500).json({
            message: 'Error in login controller',
            error: error.message
        })
    }
}
export const logout = async (req, res) => {
    try {
        res.status(200).json({ message: 'You have succesfully Logout' })
    } catch (error) {
        res.status(500).json({
            message: 'Error during Logout',
            error: error.message
        })
    }
}