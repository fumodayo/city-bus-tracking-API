import express from 'express'
import { timeBusStartController } from '../../controllers/timeBusStart.controller'

const router = express.Router()

router.route('/').get(timeBusStartController.getFullTimeBusStart)

export const timeBusStartRoutes = router
