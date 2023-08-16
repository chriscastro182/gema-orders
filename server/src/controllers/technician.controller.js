import User from "../models/User"
import Technician from "../models/Technician"

export const createTechnician = async (req, res) => {
    console.log("Entró al método creare");
    const { numemployee, phone, user } = req.body

    const newTecnician = new Technician(
        {
            numemployee,
            phone,
            user
        }
    )

    const technicianSaved = await newTecnician.save()
 
    res.status(201).json(technicianSaved)
}

export const getTechnicians = async (req, res) => {

    try {
        const technicians = await Technician.find().populate("user")
        res.status(200).json(technicians)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({err: true, message: error})
    }

}


export const getTechnicianById = async (req, res) => {

    const technician = await Technician.findById(req.params.technicianId).populate("user")

    res.json(technician)
}

export const getTechnicianByUserId = async (req, res) => {

    const technician = await Technician.findOne({user: req.params.technicianId}).populate("user")

    res.json(technician)
}

export const deleteTechnician = async (req, res) => {

    await Technician.findOneAndDelete({"_id": req.params.technicianId})

    res.status(204).json()
}


export const updateTechnicianById = async (req, res) => {
    const updatedTechnician = await Technician.findByIdAndUpdate(req.params.technicianId,
        req.body,
        {
            new: true
        })

    res.status(200).json(updatedTechnician)
}