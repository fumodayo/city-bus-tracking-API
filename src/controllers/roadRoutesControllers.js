import roadBusRouteModel from '../models/roadBusRoutes.js'
import { HttpStatusCode } from '../utilities/constants.js'

const roadRoutesControllers = {
  // GET ALL ROAD BUS ROUTES
  getAllRoadBusRoutes: async (req, res) => {
    try {
      const timestarts = await roadBusRouteModel.find()
      res.status(HttpStatusCode.OK).json(timestarts)
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  },

  // POST ALL ROAD BUS ROUTES
  postAllRoadBusRoutes: async (req, res) => {
    try {
      await roadBusRouteModel.insertMany(req.body).then(() => {
        res.status(HttpStatusCode.OK).json('Road Bus Routes!')
      })
    } catch (err) {
      return res.status(HttpStatusCode.BAD_REQUEST).json(err)
    }
  },

  // UPDATED ROAD BUS ROUTE
  updatedRoadBusRoute: async (req, res) => {
    try {
      await BusRoute.findByIdAndUpdate(req.params.id, req.body)
      res.status(HttpStatusCode.OK).json('Updated!')
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  }
}

export default roadRoutesControllers
