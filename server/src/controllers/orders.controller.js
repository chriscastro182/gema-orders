import Order from "../models/Order"
import Technician from "../models/Technician"
import Client from "../models/Client"
import User from "../models/User"

export const createOrder = async (req, res) => {
    
    const {descripcion, tecnico, cliente, Etapa} = req.body

    const newOrder = new Order({descripcion, tecnico, cliente, Etapa})

    const orderSaved = await newOrder.save()

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

export const ordersBytechnician = async (req, res) => {
    console.log(req.params);
    try {
        const tecnico = await Technician.findById(req.params.technicianId).populate("user")
    
        const orders = await Order.find({tecnico: req.params.technicianId})
                                            .populate("tecnico")
                                            .populate("cliente");
                                            
        orders.forEach(o =>  o.tecnico = tecnico );
        console.log(orders);
        await res.json(orders)
        
    } catch (error) {
        console.log(error);
    }
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


