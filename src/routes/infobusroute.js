import express from 'express'
import infoBusRouteControllers from '../controllers/infoBusRouteControllers.js'

const infoBusRoutes = express.Router()

// GET INFO BUS ROUTE
infoBusRoutes.get('/', infoBusRouteControllers.getInfoBusRoute)

// POST INFO BUS ROUTE
infoBusRoutes.post('/create', infoBusRouteControllers.postInfoBusRoute)

// UPDATED INFO BUS ROUTE
infoBusRoutes.put('/:id', infoBusRouteControllers.updatedInfoBusRoute)

export default infoBusRoutes
