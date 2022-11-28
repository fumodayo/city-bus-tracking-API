import Joi from 'joi'
import { getDB } from '../config/mongodb'

// Define travel collection
const travelCollectionName = 'travels'
const travelCollectionSchema = Joi.object({
  title: Joi.string().required().trim(),
  typeLocation: Joi.string().required().trim(),
  image: Joi.string().required().trim(),
  imageDesc: Joi.string().required().trim(),
  description: Joi.string().required().trim(),
  locationLink: Joi.string().required().trim(),
  locationName: Joi.string().required().trim(),
  location: Joi.object().keys({
    lng: Joi.string().required(),
    lat: Joi.string().required()
  }),
  createdAt: Joi.date().timestamp().default(Date.now()),
  updatedAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false)
})

const validateSchema = async data => {
  return await travelCollectionSchema.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async data => {
  try {
    const value = await validateSchema(data)
    const result = await getDB()
      .collection(travelCollectionName)
      .insertOne(value)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const TravelModel = { createNew }
