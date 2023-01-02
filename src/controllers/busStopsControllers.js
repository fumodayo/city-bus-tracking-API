import BusStops from '../models/BusStops.js'
import { HttpStatusCode } from '../utilities/constants.js'

const busStopsControllers = {
  // GET ALL BUS STOPS
  getAllBusStops: async (req, res) => {
    try {
      const busstops = await BusStops.find()
      res.status(HttpStatusCode.OK).json(busstops)
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  },

  // POST MANY BUS STOPS
  createManyBusStops: async (req, res) => {
    try {
      await BusStops.insertMany(req.body).then(() => {
        res.status(HttpStatusCode.OK).json('Bus Stops Added!')
      })
    } catch (err) {
      return res.status(HttpStatusCode.BAD_REQUEST).json(err)
    }
  },

  // create new
  createBusStop: async (req, res) => {
    try {
      await BusStops.create(req.body).then(() => {
        res.status(HttpStatusCode.OK).json('Bus Stops Added!')
      })
    } catch (err) {
      return res.status(HttpStatusCode.BAD_REQUEST).json(err)
    }
  },

  // UPDATED
  updatedBusStop: async (req, res) => {
    try {
      await BusStops.findByIdAndUpdate(req.params.id, req.body)
      res.status(HttpStatusCode.OK).json('Updated!')
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  },

  // REMOVE
  removeBusStop: async (req, res) => {
    try {
      await BusStops.findByIdAndRemove(req.params.id)
      res.status(HttpStatusCode.OK).json('Updated!')
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  }
}

export default busStopsControllers
