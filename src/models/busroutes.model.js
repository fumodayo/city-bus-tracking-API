import Joi from 'joi'
import { getDB } from '../config/mongodb'

// Define Bus Routes collection
const busRoutesCollectionName = 'busroutes'
const busRoutesCollectionSchema = Joi.object({
  codeBusRoute: Joi.string().required().trim(),
  nameRoute: Joi.string().required().trim(),
  directionRoute: Joi.string().required().trim(),
  colorRoute: Joi.string().required().trim(),
  drivingJourney: Joi.string(),
  lineDistance: Joi.string(),
  operatingTime: Joi.string(),
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
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getFullBusRoutes = async () => {
  try {
    const result = await getDB()
      .collection(busRoutesCollectionName)
      .find()
      .toArray()
    return result || {}
  } catch (error) {
    throw new Error(error)
  }
}

export const BusRoutesModel = { createNew, getFullBusRoutes }
