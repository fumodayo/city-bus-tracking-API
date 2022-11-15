import Joi from 'joi'
import { getDB } from '../config/mongodb'

// Define BusStop collection
const busStopCollectionName = 'busstops'
const busStopCollectionSchema = Joi.object({
  codeBusRoute: Joi.string().required().min(1),
  nameBusStop: Joi.string().required().min(1),
  directionRoute: Joi.string().required().min(1),
  travelTime: Joi.number().integer().min(0),
  location: Joi.object().keys({
    lng: Joi.string().required().min(1),
    lat: Joi.string().required().min(1)
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
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export const BusStopModel = { createNew }
