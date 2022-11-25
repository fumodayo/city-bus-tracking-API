import { BusRoutesModel } from '../models/busroutes.model'

const createNew = async data => {
  try {
    const results = await BusRoutesModel.createNew(data)
    return results
  } catch (error) {
    throw new Error(error)
  }
}

export const busRoutesService = { createNew }
