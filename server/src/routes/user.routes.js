import { Router } from "express"
const router = Router()

import * as userController from "../controllers/user.controller"
import { authJwt, verifySignUp } from '../middlewares'

router.get('/',
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin], 
    userController.getUsers)

router.post('/',
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin],
    userController.createUser)

router.get('/:userId',
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin], 
    userController.getUserById)

router.delete('/:userId', 
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin], 
    userController.deleteUser)

router.put('/:userId', 
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin], 
    userController.updateUserById)

export default router 

