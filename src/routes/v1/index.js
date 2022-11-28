import express from 'express'
import { HttpStatusCode } from '*/utilities/constants'
import { busRoutesRoutes } from './busroutes.route'
import { busStopsRoutes } from './busstops.route'
import { infoBusRoutesRoutes } from './infoBusRoutes.route'
import { roadRoutesRoutes } from './roadroutes.route'
import { timeBusStartRoutes } from './timeBusStart.route'
import { travelsRoutes } from './travel.route'

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

/**Bus stops APIs */
router.use('/busstops', busStopsRoutes)

/**InfoBus routes APIs */
router.use('/infobusroutes', infoBusRoutesRoutes)

/**Road routes APIs */
router.use('/roadroutes', roadRoutesRoutes)

/**Time bus start APIs */
router.use('/timebusstart', timeBusStartRoutes)

/**Travels APIs*/
router.use('/travels', travelsRoutes)

export const apiV1 = router
