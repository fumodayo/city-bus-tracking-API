import express from 'express'
import busRoutesControllers from '../controllers/busRoutesControllers.js'

const busrouteRoutes = express.Router()

// GET ALL BUS ROUTES
busrouteRoutes.get('/', busRoutesControllers.getAllBusRoutes)

// POSTS ALL BUS ROUTES
busrouteRoutes.post('/all', busRoutesControllers.postAllBusRoutes)

// CREATE
busrouteRoutes.post('/create', busRoutesControllers.createBusRoute)

// UPDATED
busrouteRoutes.put('/:id', busRoutesControllers.updatedBusRoute)

export default busrouteRoutes
