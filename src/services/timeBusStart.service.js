import { TimeBusStartModel } from '../models/timeBusStart.model'

const getFullTimeBusStart = async () => {
  try {
    const results = await TimeBusStartModel.getFullTimeBusStart()
    return results
  } catch (error) {
    throw new Error(error)
  }
}

export const timeBusStartService = { getFullTimeBusStart }
