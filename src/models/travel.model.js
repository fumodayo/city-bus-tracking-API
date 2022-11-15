import Joi from 'joi'
import { getDB } from '../config/mongodb'

// Define travel collection
const travelCollectionName = 'travels'
const travelCollectionSchema = Joi.object({
  title: Joi.string().required().min(1),
  typeLocation: Joi.string().required().min(1),
  image: Joi.string().required().min(1),
  imageDesc: Joi.string().required().min(1),
  description: Joi.string().required().min(1),
  locationLink:Joi.string().required().min(1),
  locationName:Joi.string().required().min(1),
  location: Joi.object().keys({
    lng: Joi.string().required().min(1),
    lat: Joi.string().required().min(1)
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
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export const TravelModel = { createNew }
