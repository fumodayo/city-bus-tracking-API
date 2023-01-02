import express from 'express'
import middlewareController from '../controllers/middlewareController.js'
import userController from '../controllers/userControllers.js'

const usersRoutes = express.Router()

// GET ALL USERS
usersRoutes.get(
  '/',
  middlewareController.verifyToken,
  userController.getAllUsers
)

// DELETE USER
usersRoutes.delete('/:id', userController.deleteUser)

export default usersRoutes
