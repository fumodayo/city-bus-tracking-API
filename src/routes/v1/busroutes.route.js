import express from 'express'
import { busRoutesController } from '*/controllers/busroutes.controller'
import { busRoutesValidation } from '*/validations/busroutes.validation'

const router = express.Router()

router
  .route('/')
  // .get((req, res) => console.log('Get'))
  .post(busRoutesController.createNew)

export const busRoutesRoutes = router
