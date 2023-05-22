import { Router } from "express"
const router = Router()

import * as orderCcontroller from '../controllers/orders.controller'

router.post('/', orderCcontroller.createOrder)

router.get('/', orderCcontroller.getOrders)

router.get('/:orderId', orderCcontroller.getOrderById)

router.put('/:orderId', orderCcontroller.updateOrderById)

router.delete('/:orderId', orderCcontroller.deleteOrder)

export default router