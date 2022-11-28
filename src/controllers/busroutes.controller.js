import { busRoutesService } from '../services/busroutes.service'
import { HttpStatusCode } from '../utilities/constants'

const createNew = async (req, res) => {
  try {
    const result = await busRoutesService.createNew(req.body)
    console.log('data create', result)
    res.status(HttpStatusCode.OK).json(result)
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: error.message
    })
  }
}

const getFullBusRoutes = async (req, res) => {
  try {
    const result = await busRoutesService.getFullBusRoutes()
    res.status(HttpStatusCode.OK).json(result)
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: error.message
    })
  }
}

export const busRoutesController = { createNew, getFullBusRoutes }
