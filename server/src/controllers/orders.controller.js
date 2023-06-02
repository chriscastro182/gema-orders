import Order from "../models/Order"

export const createOrder = async (req, res) => {
    
    const {descripcion, tecnico, cliente, Etapa} = req.body

    const newOrder = new Order({descripcion, tecnico, cliente, Etapa})

    const orderSaved = await newOrder.save()

    console.log(newOrder)

    res.status(201).json(orderSaved)
}

export const getOrders = async (req, res) => {
        
    const orders = await Order.find()

    res.status(200).json(orders)
}

export const getOrderById = async (req, res) => {

    const order = await Order.findById(req.params.orderId)

    res.json(order)
}

export const updateOrderById = async (req, res) => {

    const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId, req.body,
    {
        new: true
    })
    
    res.status(200).json(updatedOrder)
}

export const deleteOrder = async (req, res) => {

    await Order.findOneAndDelete(req.params.orderId)

    res.status(204).json()
}