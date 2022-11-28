import express from 'express'
import { busRoutesController } from '*/controllers/busroutes.controller'
import { busRoutesValidation } from '*/validations/busroutes.validation'

const router = express.Router()

router
  .route('/')
  .get(busRoutesController.getFullBusRoutes)
  .post(busRoutesController.createNew, busRoutesValidation.createNew)

export const busRoutesRoutes = router
