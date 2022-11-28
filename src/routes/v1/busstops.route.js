import express from 'express'
import { busStopsController } from '*/controllers/busstops.controller'

const router = express.Router()

router.route('/').get(busStopsController.getFullBusStops)

export const busStopsRoutes = router
