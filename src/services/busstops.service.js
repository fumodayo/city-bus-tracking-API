import { BusStopModel } from '../models/busstop.model'

const getFullBusStops = async () => {
  try {
    const results = await BusStopModel.getFullBusStops()
    return results
  } catch (error) {
    throw new Error(error)
  }
}

export const busStopsService = { getFullBusStops }
