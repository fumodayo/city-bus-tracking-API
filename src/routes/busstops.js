import express from 'express'
import busStopsControllers from '../controllers/busStopsControllers.js'

const busstopsRoutes = express.Router()

// GET ALL BUS STOPS
busstopsRoutes.get('/', busStopsControllers.getAllBusStops)

// CREATE MANY BUS STOPS
busstopsRoutes.post('/create', busStopsControllers.createManyBusStops)

// UPDATED
busstopsRoutes.put('/:id', busStopsControllers.updatedBusStop)

// REMOVE
busstopsRoutes.delete('/:id', busStopsControllers.removeBusStop)

// CREATE 1
busstopsRoutes.post('/createOne', busStopsControllers.createBusStop)

export default busstopsRoutes
