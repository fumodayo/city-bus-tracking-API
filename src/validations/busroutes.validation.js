import Joi from 'joi'
import { HttpStatusCode } from '../utilities/constants'

const createNew = async (req, res, next) => {
  const condition = Joi.object({
    codeBusRoute: Joi.string().required().trim(),
    nameRoute: Joi.string().required().trim(),
    directionRoute: Joi.string().required().trim(),
    colorRoute: Joi.string().required().trim()
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
