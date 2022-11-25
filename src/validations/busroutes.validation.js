import Joi from 'joi'
import { HttpStatusCode } from '../utilities/constants'

const createNew = async (req, res, next) => {
  const condition = Joi.object({
    codeBusRoute: Joi.string().required().min(1),
    nameRoute: Joi.string().required().min(1),
    directionRoute: Joi.string().required().min(1),
    colorRoute: Joi.string().required().min(1).max(12)
  })
  try {
    await condition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: new Error(error).message
    })
  }
}

export const busRoutesValidation = { createNew }
