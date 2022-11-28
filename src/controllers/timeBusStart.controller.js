import { timeBusStartService } from '../services/timeBusStart.service'
import { HttpStatusCode } from '../utilities/constants'

const getFullTimeBusStart = async (req, res) => {
  try {
    const result = await timeBusStartService.getFullTimeBusStart()
    res.status(HttpStatusCode.OK).json(result)
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: error.message
    })
  }
}

export const timeBusStartController = { getFullTimeBusStart }
