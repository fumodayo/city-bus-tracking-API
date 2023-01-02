import mongoose from 'mongoose'

const busRoutesSchema = new mongoose.Schema(
  {
    codeBusRoute: {
      type: String,
      require: true,
    },
    nameRoute: {
      type: String,
      require: true,
    },
    directionRoute: {
      type: String,
      require: true
    },
    drivingJourney: {
      type: String
    },
    lineDistance: {
      type: String
    },
    operatingTime: {
      type: String
    },
    colorRoute: {
      type: String
    }
  },
  { timestamps: true }
)

const BusRoute = mongoose.model('BusRoutes', busRoutesSchema)
export default BusRoute
