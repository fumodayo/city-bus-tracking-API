import express from 'express'
import { roadRouteController } from '../../controllers/roadroutes.controller'

const router = express.Router()

router.route('/').get(roadRouteController.getFullRoadRoutes)

export const roadRoutesRoutes = router
