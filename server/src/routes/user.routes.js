import { Router } from "express"
const router = Router()

import * as userCtrl from "../controllers/user.controller"
import { authJwt, verifySignUp } from '../middlewares'

router.get('/',
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin], 
        userCtrl.getUsers)

router.post('/',
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin],
        userCtrl.createUser)

router.get('/:userId',
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin], 
        userCtrl.getUserById)

router.delete('/:userId', 
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin], 
        userCtrl.deleteUser)

router.put('/:userId', 
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin], 
        userCtrl.updateUserById)

export default router 
