import { roadRouteService } from '../services/roadroutes.service'
import { HttpStatusCode } from '../utilities/constants'

const getFullRoadRoutes = async (req, res) => {
  try {
    const result = await roadRouteService.getFullRoadRoutes()
    res.status(HttpStatusCode.OK).json(result)
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: error.message
    })
  }
}

export const roadRouteController = { getFullRoadRoutes }
