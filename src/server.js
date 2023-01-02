import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { envs } from './config/environment.js'
import authRoutes from './routes/auth.js'
import usersRoutes from './routes/user.js'
import busrouteRoutes from './routes/busroutes.js'
import busstopsRoutes from './routes/busstops.js'
import travelsRoutes from './routes/travels.js'
import timeStartRoutes from './routes/timestart.js'
import infoBusRoutes from './routes/infobusroute.js'
import roadBusRoutes from './routes/roadroutes.js'

// Router import
const app = express()

// Connect mongodb
mongoose
  .set('strictQuery', false)
  .connect(envs.MONGODB_URI)
  .then(() => {
    console.log('connected to db')
  })
  .catch(err => {
    return err.message
  })

app.use(cors())
app.use(cookieParser())
app.use(express.json({ limit: '50mb' }))

// ROUTES
app.use('/v1/auth', authRoutes)
app.use('/v1/user', usersRoutes)

app.use('/v1/busroutes', busrouteRoutes)
app.use('/v1/busstops', busstopsRoutes)
app.use('/v1/travels', travelsRoutes)
app.use('/v1/timebusstart', timeStartRoutes)
app.use('/v1/infobusroute', infoBusRoutes)
app.use('/v1/roadroutes', roadBusRoutes)

app.listen(8000, () => {
  console.log('server running')
})

// JSON WEB TOKEN
