import infoBusRouteModel from '../models/infoBusRoute.js'
import { HttpStatusCode } from '../utilities/constants.js'

const infoBusRouteControllers = {
  // GET INFO
  getInfoBusRoute: async (req, res) => {
    try {
      const infobusroute = await infoBusRouteModel.find()
      res.status(HttpStatusCode.OK).json(infobusroute)
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  },

  // POST INFO BUS ROUTE
  postInfoBusRoute: async (req, res) => {
    try {
      await infoBusRouteModel.create(req.body).then(() => {
        res.status(HttpStatusCode.OK).json('Info Add!')
      })
    } catch (err) {
      return res.status(HttpStatusCode.BAD_REQUEST).json(err)
    }
  },
  
  // UPDATED INFO BUS ROUTE
  updatedInfoBusRoute: async (req, res) => {
    try {
      await infoBusRouteModel.findByIdAndUpdate(req.params.id, req.body)
      res.status(HttpStatusCode.OK).json('Updated!')
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  }
}

export default infoBusRouteControllers
