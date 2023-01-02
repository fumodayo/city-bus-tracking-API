import express from 'express'
import roadRoutesControllers from '../controllers/roadRoutesControllers.js'

const roadBusRoutes = express.Router()

// GET ALL
roadBusRoutes.get('/', roadRoutesControllers.getAllRoadBusRoutes)

// POSTS ALL
roadBusRoutes.post('/all', roadRoutesControllers.postAllRoadBusRoutes)

// UPDATED
roadBusRoutes.put('/:id', roadRoutesControllers.updatedRoadBusRoute)

export default roadBusRoutes
