import { infoBusRoutesService } from '../services/infoBusRoutes.service'
import { HttpStatusCode } from '../utilities/constants'

const getFullInfoBusRoutes = async (req, res) => {
  try {
    const result = await infoBusRoutesService.getFullInfoBusRoutes()
    res.status(HttpStatusCode.OK).json(result)
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: error.message
    })
  }
}

export const infoBusRoutesController = { getFullInfoBusRoutes }
