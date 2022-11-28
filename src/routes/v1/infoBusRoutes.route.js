import express from 'express'
import { infoBusRoutesController } from '../../controllers/infoBusRoutes.controller'

const router = express.Router()

router.route('/').get(infoBusRoutesController.getFullInfoBusRoutes)

export const infoBusRoutesRoutes = router
