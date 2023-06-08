import Client from "../models/Client"

export const createClient = async (req, res) => {

    const { name, lastname, location, phone, email } = req.body

    const newClient = new Client(
        {
            name,
            lastname,
            location,
            phone,
            email,
        }
    )
    
    const clientSaved = await newClient.save()

    res.status(201).json(clientSaved)
}

export const getClients = async (req, res) => {

    const clients = await Client.find()

    res.status(200).json(clients)
}


export const getClientById = async (req, res) => {

    const client = await Client.findById(req.params.clientId)

    res.json(client)
}

export const deleteClient = async (req, res) => {

    await Client.findOneAndDelete(req.params.clientId)

    res.status(204).json()
}


export const updateClientById = async (req, res) => {
    const updatedClient = await Client.findByIdAndUpdate(req.params.clientId,
        req.body,
        {
            new: true
        })

    res.status(200).json(updatedClient)
}