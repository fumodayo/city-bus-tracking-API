import Joi from 'joi'
import { getDB } from '../config/mongodb'

// Define BusStop collection
const busStopCollectionName = 'busstops'
const busStopCollectionSchema = Joi.object({
  codeBusRoute: Joi.string().required().trim(),
  nameBusStop: Joi.string().required().trim(),
  directionRoute: Joi.string().required().trim(),
  travelTime: Joi.number().integer().min(0),
  location: Joi.object().keys({
    lng: Joi.string().required(),
    lat: Joi.string().required()
  }),
  createdAt: Joi.date().timestamp().default(Date.now()),
  updatedAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false)
})

const validateSchema = async data => {
  return await busStopCollectionSchema.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async data => {
  try {
    const value = await validateSchema(data)
    const result = await getDB()
      .collection(busStopCollectionName)
      .insertOne(value)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const BusStopModel = { createNew }
