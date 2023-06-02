import { Router } from "express"
const router = Router()

import * as orderCcontroller from '../controllers/orders.controller'

import { authJwt } from "../middlewares"

router.get('/',  authJwt.verifyToken, orderCcontroller.getOrders)

router.get('/:orderId', authJwt.verifyToken, orderCcontroller.getOrderById)

router.post('/', 
            [authJwt.verifyToken, authJwt.isLead, authJwt.isAdmin],
             orderCcontroller.createOrder)

router.put('/:orderId', 
            [authJwt.verifyToken, authJwt.isAdmin], 
            orderCcontroller.updateOrderById)

router.delete('/:orderId', 
            [authJwt.verifyToken, authJwt.isLead, authJwt.isAdmin], 
            orderCcontroller.deleteOrder)

export default router