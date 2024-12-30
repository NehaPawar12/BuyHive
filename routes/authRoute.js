import express from 'express'
import {registerController} from '../controller/authController.js'

//router object
const router = express.Router()

//Forming routing
//Register || METHOD POST

router.post('/register',registerController)


export default router