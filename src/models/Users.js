import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    // admin: {
    //   type: Boolean,
    //   default: false
    // }
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)
export default User
