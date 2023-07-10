
import Technician from "../models/Technician"
import Client from "../models/Client"

export const getCatalogsOrders = async (req, res) => {
    
    try {
        const Tecnicos = await Technician.find().populate("user");
    
        const Clientes = await Client.find()
    
        res.status(200).json({Tecnicos, Clientes})        
    } catch (error) {
        res.status(500).json({message: error})     
    }
}