import TravelsModel from '../models/TravelsModel.js'
import { HttpStatusCode } from '../utilities/constants.js'

const travelsControllers = {
  // GET ALL TIME BUS START
  getAllTravels: async (req, res) => {
    try {
      const travels = await TravelsModel.find()
      res.status(HttpStatusCode.OK).json(travels)
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  },

  // POST ALL TRAVELS
  postAllTravels: async (req, res) => {
    try {
      await TravelsModel.insertMany(req.body).then(() => {
        res.status(HttpStatusCode.OK).json('travels Added!')
      })
    } catch (err) {
      return res.status(HttpStatusCode.BAD_REQUEST).json(err)
    }
  }
}

export default travelsControllers
