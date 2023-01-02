import jwt from 'jsonwebtoken'
import { envs } from '../config/environment.js'
import { HttpStatusCode } from '../utilities/constants.js'

const middlewareController = {
  // VERIFY TOKEN
  verifyToken: (req, res, next) => {
    const token = req.headers.token
    if (token) {
      // Bearer 123456
      const accessToken = token.split(' ')[1]
      jwt.verify(accessToken, envs.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          return res.status(HttpStatusCode.FORBIDDEN).json('Token is not valid')
        }
        req.user = user
        next()
      })
    } else {
      return res.status(HttpStatusCode.UNAUTHORIZED).json('Your not authenticated')
    }
  }
}

export default middlewareController
