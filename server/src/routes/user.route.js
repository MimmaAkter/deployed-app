import { Router } from "express";
import { Read } from '../controllers/user.controller.js'


const router = Router()

 
// R=Read
router.get("/read", Read);

export default router