import { travelsService } from '../services/travel.service'
import { HttpStatusCode } from '../utilities/constants'

const getFullTravels = async (req, res) => {
  try {
    const result = await travelsService.getFullTravels()
    res.status(HttpStatusCode.OK).json(result)
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: error.message
    })
  }
}

export const travelsController = { getFullTravels }
