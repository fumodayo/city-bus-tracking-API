import Joi from 'joi'
import { getDB } from '../config/mongodb'

// Define Bus Routes collection
const busRoutesCollectionName = 'busroutes'
const busRoutesCollectionSchema = Joi.object({
  codeBusRoute: Joi.string().required().min(1),
  nameRoute: Joi.string().required().min(1),
  directionRoute: Joi.string().required().min(1),
  drivingJourney: Joi.string().required().min(1),
  lineDistance: Joi.string().required().min(1),
  operatingTime: Joi.string().required().min(1),
  colorRoute: Joi.string().required().min(1).max(12),
  createdAt: Joi.date().timestamp().default(Date.now()),
  updatedAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false)
})

const validateSchema = async data => {
  return await busRoutesCollectionSchema.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async data => {
  try {
    const value = await validateSchema(data)
    const result = await getDB()
      .collection(busRoutesCollectionName)
      .insertOne(value)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export const BusRoutesModel = { createNew }
