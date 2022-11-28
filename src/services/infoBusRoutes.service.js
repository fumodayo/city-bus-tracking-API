import { InfoBusRoutesModel } from '../models/infoBusRoutes.model'

const getFullInfoBusRoutes = async () => {
  try {
    const results = await InfoBusRoutesModel.getFullInfoBusRoutes()
    return results
  } catch (error) {
    throw new Error(error)
  }
}

export const infoBusRoutesService = { getFullInfoBusRoutes }
