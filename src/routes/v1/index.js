import express from 'express'
import { HttpStatusCode } from '*/utilities/constants'
import { busRoutesRoutes } from './busroutes.route'

const router = express.Router()

/**
 * GET v1/status
 */
router.get('/status', (req, res) =>
  res.status(HttpStatusCode.OK).json({
    status: 'OK!'
  })
)

/** Bus routes APIs */
router.use('/busroutes', busRoutesRoutes)

export const apiV1 = router
