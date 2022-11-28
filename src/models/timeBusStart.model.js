import Joi from 'joi'
import { getDB } from '../config/mongodb'

// Define Bus Routes collection
const timeBusStartCollectionName = 'timebusstart'
const timeBusStartCollectionSchema = Joi.object({
  codeBusRoute: Joi.string().required().trim(),
  directionRoute: Joi.string().required().trim(),
  startingTime: Joi.array().items(Joi.string()).required(),
  createdAt: Joi.date().timestamp().default(Date.now()),
  updatedAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false)
})

const validateSchema = async data => {
  return await timeBusStartCollectionSchema.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async data => {
  try {
    const value = await validateSchema(data)
    const result = await getDB()
      .collection(timeBusStartCollectionName)
      .insertOne(value)
    return result
  } catch (error) {
    console.log(error)
  }
}

const getFullTimeBusStart = async () => {
  try {
    const result = await getDB()
      .collection(timeBusStartCollectionName)
      .find()
      .toArray()
    return result || {}
  } catch (error) {
    throw new Error(error)
  }
}

export const TimeBusStartModel = { createNew, getFullTimeBusStart }
