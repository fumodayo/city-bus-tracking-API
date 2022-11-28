import { roadRouteModel } from '../models/roadroutes.model'

const getFullRoadRoutes = async () => {
  try {
    const results = await roadRouteModel.getFullRoadRoutes()
    return results
  } catch (error) {
    throw new Error(error)
  }
}

export const roadRouteService = { getFullRoadRoutes }
