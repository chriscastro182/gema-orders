import Order from "../models/Order"

export const createOrder = async (req, res) => {
    
    const {descripcion, tecnico, cliente, Etapa} = req.body

    const newOrder = new Order({descripcion, tecnico, cliente, Etapa})

    const orderSaved = await newOrder.save()

    console.log(newOrder)
    
    res.status(201).json(orderSaved)
}

export const getOrder = (req, res) => {
    
}

export const getOrders = (req, res) => {
    res.json('get Orders All')
}

export const getOrderById = (req, res) => {
    
}

export const updateOrderById = (req, res) => {
    
}

export const deleteOrder = (req, res) => {
    
}