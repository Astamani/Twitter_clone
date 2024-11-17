import e from "express";
import { login,signup,logout } from "../controllers/auth.controllers.js";
const router = e.Router();

router.post('/signup',signup)
router.post('/login',login)
router.get('/logout',logout)

export default router;