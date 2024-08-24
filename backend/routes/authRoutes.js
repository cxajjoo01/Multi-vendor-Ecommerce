import express from 'express'
import { admin_login , get_user } from '../controllers/authControllers.js'
import { authMiddleware } from './../middlewares/authMiddleware.js';


const router = express.Router()

router.post('/admin-login',admin_login)
router.get('/get-user',authMiddleware,get_user)

export default router