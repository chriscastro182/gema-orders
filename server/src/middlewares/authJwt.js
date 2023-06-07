import  jwt  from "jsonwebtoken"
import config from "../config"
import User from "../models/User"
import Role from "../models/Role";


export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]

        if(!token) return res.status(403).json({message: "No Token provided"})
    
        const decoded = jwt.verify(token, config.SECRET)
        req.userId = decoded.id;
    
        const user = await User.findById(req.userId, {password: 0})
    
        if(!user) return res.status(404).json({message: "No user found"})
    
        next()

    } catch (error) {
        return res.status(401).json({message: "Unauthorized"})
    }
};

export const isLead = async (req, res, next) => {
    const user = await User.findById(req.userId, {password: 0})

    const roles = await Role.find({_id: {$in: user.roles}})
    console.log(roles);
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].rol === "lead") {
            next()
            return
        } 
    }
    return res.status(403).json({messager: "Lead Role required"})
}

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId, {password: 0})

    const roles = await Role.find({_id: {$in: user.roles}})

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].rol === "admin") {
            console.log('si es admin')
            next()
            return
        } 
    }
    return res.status(403).json({messager: "Admin Role required"})
}
