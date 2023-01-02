import mongoose from 'mongoose'

const travelsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    typeLocation: {
      type: String,
      require: true
    },
    image: {
      type: String,
      require: true
    },
    imageDesc: {
      type: String
    },
    description: {
      type: String
    },
    locationLink: {
      type: String
    },
    locationName: {
      type: String
    },
    location: {
      lng: { type: String },
      lat: { type: String }
    }
  },
  { timestamps: true }
)

const TravelsModel = mongoose.model('Travels', travelsSchema)
export default TravelsModel
