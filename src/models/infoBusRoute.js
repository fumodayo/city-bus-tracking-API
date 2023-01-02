import mongoose from 'mongoose'

const infoBusRouteSchema = new mongoose.Schema(
  {
    busTicketOneWay: {
      type: String,
      require: true
    },
    busTicketPrioritized: {
      type: String,
      require: true
    },
    busTicketOrdinary: {
      type: String,
      require: true
    },
    busName: {
      type: String,
      require: true
    },
    busCapacity: {
      type: String,
      require: true
    },
    busOperation: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
)

const infoBusRouteModel = mongoose.model('infobusroute', infoBusRouteSchema)
export default infoBusRouteModel
