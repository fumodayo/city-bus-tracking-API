import Joi from 'joi'
import { getDB } from '../config/mongodb'

const adminDetailsCollectionName = 'admin'
const adminDetailsCollectionSchema = Joi.object({
  username: Joi.string().required().trim(),
  password: Joi.string().required().trim(),
  createdAt: Joi.date().timestamp().default(Date.now()),
  updatedAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false)
})

const validateSchema = async data => {
  return await adminDetailsCollectionSchema.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async data => {
  try {
    const value = await validateSchema(data)
    const result = await getDB()
      .collection(adminDetailsCollectionName)
      .insertOne(value)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const AdminDetailsModel = { createNew }
