import { adminDetailsService } from '../services/admindetails.service'
import { HttpStatusCode } from '../utilities/constants'

const createNew = async (req, res) => {
  try {
    const result = await adminDetailsService.createNew(req.body)
    console.log('data create', result)
    res.status(HttpStatusCode.OK).json(result)
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: error.message
    })
  }
}

export const adminDetailsController = { createNew }
