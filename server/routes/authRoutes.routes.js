import e from "express";
import { signupValidator, loginValidator } from "../validator/auth.validator.js"
import { login,signup,logout } from "../controllers/auth.controllers.js";
const router = e.Router();

router.post('/signup',async(req,res,next)=>{
    const {error} = signupValidator.validate(req.body);
    if (error){
        return res.status(400).json({error:error.details[0].message})
    }
    next();
},signup)


router.post('/login',login)
// ,async(req,res,next)=>{
//     const error = loginValidator.validate(req.body)
//     if(error){
//         return res.status(400).json({error:error.details[0].message})
//     }
//     next();
// }

router.get('/logout',logout)

export default router;