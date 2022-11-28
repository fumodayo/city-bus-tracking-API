import express from 'express'
import { travelsController } from '../../controllers/travel.controller'

const router = express.Router()

router.route('/').get(travelsController.getFullTravels)

export const travelsRoutes = router
