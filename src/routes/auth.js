import express from 'express'
import authController from '../controllers/authControllers.js'
import middlewareController from '../controllers/middlewareController.js'

const authRoutes = express.Router()

// REGISTER
authRoutes.post('/register', authController.registerUser)

// LOGIN
authRoutes.post('/login', authController.loginUser)

// REFRESH
authRoutes.post('/refresh', authController.requestRefreshToken)

//LOG OUT
authRoutes.post(
  '/logout',
  middlewareController.verifyToken,
  authController.userLogout
)

export default authRoutes
