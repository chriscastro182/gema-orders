import { Router } from "express"
const router = Router()

import * as orderController from '../controllers/orders.controller'

import { authJwt } from "../middlewares"

router.get('/',  authJwt.verifyToken, orderController.getOrders)

router.get('/:orderId', authJwt.verifyToken, orderController.getOrderById)

router.get('/ordersBytechnician/:technicianId', authJwt.verifyToken, orderController.ordersBytechnician)

router.post('/', 
            [authJwt.verifyToken, authJwt.isLead, authJwt.isAdmin],
             orderController.createOrder)

router.put('/:orderId', 
            [authJwt.verifyToken, authJwt.isAdmin], 
            orderController.updateOrderById)

router.delete('/:orderId', 
            [authJwt.verifyToken, authJwt.isLead, authJwt.isAdmin], 
            orderController.deleteOrder)



export default router