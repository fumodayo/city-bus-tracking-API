import BusRoute from '../models/BusRoutes.js'
import { HttpStatusCode } from '../utilities/constants.js'

const busRoutesControllers = {
  // GET ALL BUS ROUTES
  getAllBusRoutes: async (req, res) => {
    try {
      const busroutes = await BusRoute.find()
      res.status(HttpStatusCode.OK).json(busroutes)
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  },

  // CREATE BUS ROUTE
  createBusRoute: async (req, res) => {
    try {
      await BusRoute.create(req.body).then(() => {
        res.status(HttpStatusCode.OK).json('createNew')
      })
    } catch (err) {
      return res.status(HttpStatusCode.BAD_REQUEST).json(err)
    }
  },

  // POST ALL BUS ROUTES
  postAllBusRoutes: async (req, res) => {
    try {
      await BusRoute.insertMany(req.body).then(() => {
        res.status(HttpStatusCode.OK).json('Bus Routes Added!')
      })
    } catch (err) {
      return res.status(HttpStatusCode.BAD_REQUEST).json(err)
    }
  },

  // UPDATED BUS ROUTE
  updatedBusRoute: async (req, res) => {
    try {
      await BusRoute.findByIdAndUpdate(req.params.id, req.body)
      res.status(HttpStatusCode.OK).json('Updated!')
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  }
}

export default busRoutesControllers
