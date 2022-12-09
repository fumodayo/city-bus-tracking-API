import express from 'express'
import { adminDetailsController } from '../../controllers/admindetails.controller'
import { adminDetailValidation } from '../../validations/admindetails.validation'

const router = express.Router()

router
  .route('/')
  .post(adminDetailsController.createNew, adminDetailValidation.createNew)

export const loginRoute = router
