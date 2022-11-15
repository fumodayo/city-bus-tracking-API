import Joi from 'joi'
import { getDB } from '../config/mongodb'

// Define Bus Routes collection
const roadRouteCollectionName = 'roadroutes'
const roadRouteCollectionSchema = Joi.object({
  codeBusRoute: Joi.string().required().min(1),
  directionRoute: Joi.string().required().min(1),
  colorRoute: Joi.string().required().min(1),
  lineRoute: Joi.array().items(Joi.array()).required(),
  createdAt: Joi.date().timestamp().default(Date.now()),
  updatedAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false)
})

const validateSchema = async data => {
  return await roadRouteCollectionSchema.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async data => {
  try {
    const value = await validateSchema(data)
    const result = await getDB()
      .collection(roadRouteCollectionName)
      .insertOne(value)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export const roadRouteModel = { createNew }
