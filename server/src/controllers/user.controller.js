import User from "../models/User"

export const createUser = async (req, res) => {

    const { name, lastname, password, email, empresa, roles } = req.body

    const newUser = new User(
        {
            name,
            lastname,
            password: await User.encryptPass(password), 
            email, 
            empresa,
            roles
        }
    )

    const userSaved = await newUser.save()

    res.status(201).json(userSaved)
}     