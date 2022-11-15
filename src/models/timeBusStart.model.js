import Joi from 'joi'
import { getDB } from '../config/mongodb'

// Define Bus Routes collection
const timeBusStartCollectionName = 'timebusstart'
const timeBusStartCollectionSchema = Joi.object({
  codeBusRoute: Joi.string().required().min(1),
  directionRoute: Joi.string().required().min(1),
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
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export const TimeBusStartModel = { createNew }
