import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role'

export const signIn = async (req, res) => {

    const userFound = await User.findOne({email: req.body.email}).populate("roles")

    if (!userFound) return res.status(400).json({message: "User not found"})

    const matchPass = await User.comparePass(req.body.password, userFound.password)

    if(!matchPass) return res.status(401).json({token:null, message: 'Invalid password'})

    const token = jwt.sign({id: userFound._id}, config.SECRET,{
        expiresIn: 7200 // 2 hours
    })

    //console.log(userFound);

    res.json({token })
}

export const signUp = async (req, res) => {
    const {name, email, password, roles} = req.body;

    const userFound = User.find({email})

    const newUser = new User({
        name,
        email,
        password: await User.encryptPass(password)
    })

    if (roles) {
        const foundRoles = await Role.find({rol: {$in: roles}})
        newUser.roles = foundRoles.map( role => role._id)
    } else {
        const role = await Role.findOne({rol: "user"})
        newUser.roles = [role._id]
    }

    const savedUser = await newUser.save()

    const token = jwt.sign({id: savedUser._id}, config.SECRET,{
        expiresIn: 7200 // 2 hours
    })

    res.json(token)
}
