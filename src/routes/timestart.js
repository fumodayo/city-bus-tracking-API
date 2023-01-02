import express from 'express'
import timeStartControllers from '../controllers/timeStartControllers.js'

const timeStartRoutes = express.Router()

// GET ALL TIME STARTS
timeStartRoutes.get('/', timeStartControllers.getAllTimeBusStart)

// POSTS ALL BUS STOPS
timeStartRoutes.post('/all', timeStartControllers.postAllTimeBusStart)

// CREATE TIME BUS START
timeStartRoutes.post('/create', timeStartControllers.createTimeBusStart)

export default timeStartRoutes
