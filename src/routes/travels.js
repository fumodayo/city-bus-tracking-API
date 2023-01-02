import express from 'express'
import travelsControllers from '../controllers/travelsControllers.js'

const travelsRoutes = express.Router()

// GET ALL TRAVELS
travelsRoutes.get('/', travelsControllers.getAllTravels)

// POSTS ALL BUS STOPS
travelsRoutes.post('/create', travelsControllers.postAllTravels)

export default travelsRoutes
