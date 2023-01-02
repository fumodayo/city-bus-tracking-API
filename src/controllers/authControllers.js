import bcrypt from 'bcrypt'
import User from '../models/Users.js'
import jwt from 'jsonwebtoken'
import { HttpStatusCode } from '../utilities/constants.js'
import { envs } from '../config/environment.js'

let refreshTokens = []

const authController = {
  // REGISTER
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10)
      const hashed = await bcrypt.hash(req.body.password, salt)

      // Create new user
      const newUser = await new User({
        username: req.body.username,
        password: hashed
      })

      // Save to DB
      const user = await newUser.save()
      res.status(HttpStatusCode.OK).json(user)
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  },

  // GENERATE ACCESS TOKEN
  generateAccessToken: user => {
    return jwt.sign(
      {
        id: user._id
      },
      envs.JWT_ACCESS_KEY,
      { expiresIn: '15m' }
    )
  },

  // GENERATE REFRESH TOKEN
  generateRefreshToken: user => {
    return jwt.sign(
      {
        id: user._id
      },
      envs.JWT_REFRESH_KEY,
      { expiresIn: '365d' }
    )
  },

  // LOGIN
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({
        username: req.body.username
      })
      if (!user) {
        return res.status(HttpStatusCode.NOT_FOUND).json('Wrong username!')
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      )
      if (!validPassword) {
        return res.status(HttpStatusCode.NOT_FOUND).json('Wrong password!')
      }
      if (user && validPassword) {
        const accessToken = authController.generateAccessToken(user)
        const refreshToken = authController.generateRefreshToken(user)
        refreshTokens.push(refreshToken)
        res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          secure: false,
          path: '/',
          sameSite: 'strict'
        })
        const { password, ...others } = user._doc
        res.status(200).json({ ...others, accessToken })
      }
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json(err)
    }
  },

  requestRefreshToken: async (req, res) => {
    // Take refresh token from user
    const refreshToken = req.cookies.refreshToken
    res.status(HttpStatusCode.OK).json(refreshToken)
    if (!refreshToken)
      return res
        .status(HttpStatusCode.UNAUTHORIZED)
        .json('Your not authenticated!')
    if (!refreshTokens.includes(refreshToken)) {
      return res
        .status(HttpStatusCode.FORBIDDEN)
        .json('Refresh token is not valid!')
    }
    jwt.verify(refreshToken, envs.JWT_REFRESH_KEY, (err, user) => {
      if (err) {
        return err
      }
      refreshTokens = refreshTokens.filter(token => token !== refreshToken)
      // Create new accessToken, refreshToken
      const newAccessToken = authController.generateAccessToken(user)
      const newRefreshToken = authController.generateRefreshToken(user)
      refreshTokens.push(newRefreshToken)
      res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: '/',
        sameSite: 'strict'
      })

      res.status(HttpStatusCode.OK).json({ accessToken: newAccessToken })
    })
  },

  // LOG OUT
  userLogout: async (req, res) => {
    res.clearCookie('refreshToken')
    refreshTokens = refreshTokens.filter(
      token => token !== req.cookies.refreshToken
    )
    res.status(HttpStatusCode.OK).json('Logged out!')
  }
}

export default authController
