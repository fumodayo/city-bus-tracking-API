import dotenv from 'dotenv'
dotenv.config()

export const envs = {
  MONGODB_URI: process.env.MONGODB_URI,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  DATBASE_NAME: process.env.DATBASE_NAME,
  JWT_ACCESS_KEY: process.env.JWT_ACCESS_KEY,
  JWT_REFRESH_KEY: process.env.JWT_REFRESH_KEY
}
