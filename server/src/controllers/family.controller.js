import Family from "../models/Family"

export const createFamily = async (req, res) => {

    const { name, status, description } = req.body

    const newFamily = new Family(
        {
            name,
            status,
            description
        }
    )

    const familySaved = await newFamily.save()
 
    res.status(201).json(familySaved)
}

export const getFamilies = async (req, res) => {

    const families = await Family.find()

    res.status(200).json(families)
}


export const getFamilyById = async (req, res) => {

    const family = await Family.findById(req.params.familyId)

    res.json(family)
}

export const deleteFamily = async (req, res) => {

    await Family.findOneAndDelete(req.params.familyId)

    res.status(204).json()
}


export const updateFamilyById = async (req, res) => {
    const updatedFamily = await Family.findByIdAndUpdate(req.params.familyId,
        req.body,
        {
            new: true
        })

    res.status(200).json(updatedFamily)
}