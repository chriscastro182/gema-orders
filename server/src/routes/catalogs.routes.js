import { Router } from "express"
const router = Router()

import * as catalogsController from '../controllers/catalogs.controller'

import { authJwt } from "../middlewares"

/* Other functions Non-API-Rest Orders Entity */
router.get('/getOrdersCatalog',
            authJwt.verifyToken, 
            catalogsController.getCatalogsOrders)

export default router