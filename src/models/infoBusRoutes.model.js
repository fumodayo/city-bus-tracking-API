import Joi from 'joi'
import { getDB } from '../config/mongodb'

// Define Bus Routes collection
const infoBusRoutesCollectionName = 'infobusroutes'
const infoBusRoutesCollectionSchema = Joi.object({
  ticketPrice: Joi.array().items(Joi.string()).required(),
  linkMonthlyTicket: Joi.string().required().min(1),
  linkOnline: Joi.string().required().min(1),
  busName: Joi.string().required().min(1),
  busCapacity: Joi.string().required().min(1),
  busOperation: Joi.string().required().min(1),
  createdAt: Joi.date().timestamp().default(Date.now()),
  updatedAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false)
})

const validateSchema = async data => {
  return await infoBusRoutesCollectionSchema.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async data => {
  try {
    const value = await validateSchema(data)
    const result = await getDB()
      .collection(infoBusRoutesCollectionName)
      .insertOne(value)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export const InfoBusRoutesModel = { createNew }
