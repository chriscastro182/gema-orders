import User from "../models/User"

export const createUser = async (req, res) => {

    const { name, password, email, roles } = req.body

    const newUser = new User(
        {
            name,
            password: await User.encryptPass(password), 
            email, 
            roles
        }
    )

    const userSaved = await newUser.save()

    res.status(201).json(userSaved)
}     