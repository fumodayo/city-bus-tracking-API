import express from 'express'
import { connectDB } from './config/mongodb'
import { env } from '*/config/environment'

const app = express()

connectDB().catch(console.log)

app.get('/', (req, res) => {
  res.end('<h1>Hello word</h1>')
})

app.listen(env.PORT, env.HOST, () => {
  console.log(`Hello ryo, i am running ${env.PORT}`)
})
