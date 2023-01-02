import User from '../models/Users.js'
import { HttpStatusCode } from '../utilities/constants.js'

const userController = {
  // GET ALL USERS
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find()
      res.status(HttpStatusCode.OK).json(user)
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  },

  // DELETE USER
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params._id)
      res.status(HttpStatusCode.OK).json('Delete successfully!')
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  }
}

export default userController
