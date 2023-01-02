import mongoose from 'mongoose'

const roadBusRouteSchema = new mongoose.Schema(
  {
    codeBusRoute: {
      type: String,
      require: true
    },
    directionRoute: {
      type: String,
      require: true
    },
    colorRoute: {
      type: String,
      require: true
    },
    lineRoute: {
      type: Array,
      require: true
    }
  },
  { timestamps: true }
)

const roadBusRouteModel = mongoose.model('roadbusroutes', roadBusRouteSchema)
export default roadBusRouteModel
