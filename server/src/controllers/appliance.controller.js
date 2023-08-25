import Appliance from "../models/Appliance"

export const createAppliance = async (req, res) => {

    const { model, serial, guarantee, voltage, roomTemperature } = req.body

    const newAppliance = new Appliance(
        {
            model,
            serial,
            guarantee,
            voltage,
            roomTemperature
        }
    )

    const applianceSaved = await newAppliance.save()
 
    res.status(201).json(applianceSaved)
}

export const getAppliances = async (req, res) => {

    const appliances = await Appliance.find()

    res.status(200).json(appliances)
}


export const getApplianceById = async (req, res) => {

    const appliance = await Appliance.findById(req.params.applianceId)

    res.json(appliance)
}

export const deleteAppliance = async (req, res) => {

    await Appliance.findOneAndDelete(req.params.applianceId)

    res.status(204).json()
}


export const updateApplianceById = async (req, res) => {
    const updatedAppliance = await Appliance.findByIdAndUpdate(req.params.applianceId,
        req.body,
        {
            new: true
        })

    res.status(200).json(updatedAppliance)
}
