import Enterprise from "../models/Enterprise"

export const createEnterprise = async (req, res) => {

    const { name, email, tel, logo } = req.body

    const newEnterprise = new Enterprise(
        {
            name,
            email,
            tel,
            logo
        }
    )

    const enterpriseSaved = await newEnterprise.save()
 
    res.status(201).json(enterpriseSaved)
}

export const getEnterprises = async (req, res) => {

    const enterprises = await Enterprise.find()

    res.status(200).json(enterprises)
}


export const getEnterpriseById = async (req, res) => {

    const enterprise = await Enterprise.findById(req.params.enterpriseId)

    res.json(enterprise)
}

export const deleteEnterprise = async (req, res) => {

    await Enterprise.findOneAndDelete(req.params.enterpriseId)

    res.status(204).json()
}


export const updateEnterpriseById = async (req, res) => {
    const updatedEnterprise = await Enterprise.findByIdAndUpdate(req.params.enterpriseId,
        req.body,
        {
            new: true
        })

    res.status(200).json(updatedEnterprise)
}