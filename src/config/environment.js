require('dotenv').config()

export const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  DATBASE_NAME: process.env.DATBASE_NAME
}
