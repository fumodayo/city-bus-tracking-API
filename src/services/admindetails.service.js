import { AdminDetailsModel } from '../models/admindetails.model'

const createNew = async data => {
  try {
    const results = await AdminDetailsModel.createNew(data)
    return results
  } catch (error) {
    throw new Error(error)
  }
}

export const adminDetailsService = { createNew }
