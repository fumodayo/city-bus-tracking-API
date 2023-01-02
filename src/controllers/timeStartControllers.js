import TimeStartModel from '../models/TimeStartModel.js'
import { HttpStatusCode } from '../utilities/constants.js'

const timeStartControllers = {
  // GET ALL TIME BUS START
  getAllTimeBusStart: async (req, res) => {
    try {
      const timestarts = await TimeStartModel.find()
      res.status(HttpStatusCode.OK).json(timestarts)
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  },

  // POST ALL TIME BUS START
  postAllTimeBusStart: async (req, res) => {
    try {
      await TimeStartModel.insertMany(req.body).then(() => {
        res.status(HttpStatusCode.OK).json('Bus Routes Added!')
      })
    } catch (err) {
      return res.status(HttpStatusCode.BAD_REQUEST).json(err)
    }
  },

  // CREATE TIME BUS START
  createTimeBusStart: async (req, res) => {
    try {
      await TimeStartModel.create(req.body).then(() => {
        res.status(HttpStatusCode.OK).json('createNew')
      })
    } catch (err) {
      return res.status(HttpStatusCode.BAD_REQUEST).json(err)
    }
  }
}

export default timeStartControllers
