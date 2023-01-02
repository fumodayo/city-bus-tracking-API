import mongoose from 'mongoose'

const busStopsSchema = new mongoose.Schema(
  {
    nameBusStop: {
      type: String,
      require: true
    },
    codeBusRoute: {
      type: String,
      require: true
    },
    directionRoute: {
      type: String,
      require: true
    },
    travelTime: {
      type: String,
      require: true
    },
    travelNear: {
      type: String,
      require: true
    },
    location: {
      lng: { type: String },
      lat: { type: String }
    }
  },
  { timestamps: true }
)

const BusStops = mongoose.model('BusStops', busStopsSchema)
export default BusStops
