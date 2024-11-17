

export const signup = async (req, res) => {
    try {
        res.status(201).json({ message: 'You have succesfully SignedUp' })
    } catch (error) {
        res.status(500).json({
            message: 'Error during Signup',
            error: error.message
        })
    }
}
export const login = async (req, res) => {
    try {
        res.status(200).json({ message: 'You have succesfully LogedIn' })
    } catch (error) {
        res.status(500).json({
            message: 'Error during login',
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