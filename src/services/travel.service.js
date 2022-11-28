import { TravelModel } from '../models/travel.model'

const getFullTravels = async () => {
  try {
    const results = await TravelModel.getFullTravels()
    return results
  } catch (error) {
    throw new Error(error)
  }
}

export const travelsService = { getFullTravels }
