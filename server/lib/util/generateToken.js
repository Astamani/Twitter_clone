import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })
    res.cookie('jwt',token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true, //protect cros site scrioting attack
        sameSite:'strict', //CSRF protect cros site request forgery attacks
        secure:process.env.NODE_ENV !== 'developement'
    })
}

export default generateTokenAndSetCookie