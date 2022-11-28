import { busStopsService } from '../services/busstops.service'
import { HttpStatusCode } from '../utilities/constants'

const getFullBusStops = async (req, res) => {
  try {
    const result = await busStopsService.getFullBusStops()
    res.status(HttpStatusCode.OK).json(result)
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: error.message
    })
  }
}

export const busStopsController = { getFullBusStops }
