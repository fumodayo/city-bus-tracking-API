import mongoose from 'mongoose'

const timeStartSchema = new mongoose.Schema(
  {
    codeBusRoute: {
      type: String,
      require: true
    },
    directionRoute: {
      type: String,
      require: true
    },
    startingTime: {
      type: Array,
      require: true
    }
  },
  { timestamps: true }
)

const TimeStartModel = mongoose.model('timebusstart', timeStartSchema)
export default TimeStartModel
