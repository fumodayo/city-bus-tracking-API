import express from 'express'
import { connectDB } from './config/mongodb'
import { env } from '*/config/environment'
import { BusRoutesModel } from './models/busroutes.model'

connectDB()
  .then(() => console.log('Connected successfully to database server'))
  .then(() => bootServer())
  .catch(error => {
    console.log(error)
    process.exit(1)
  })

const bootServer = () => {
  const app = express()

  app.get('/', async (req, res) => {
    // let fakeData = []
    await BusRoutesModel.createNew(fakeData)

    res.end('<h1>Hello word</h1>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello ryo, i am running ${env.APP_PORT}`)
  })
}
