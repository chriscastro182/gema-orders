import { Router } from "express"
const router = Router()

import * as userCtrl from "../controllers/user.controller"
import { authJwt, verifySignUp } from '../middlewares'

router.get('/',
    [authJwt.verifyToken,verifySignUp.checkRolesExisted,verifySignUp.checkDuplicateUser], 
        userCtrl.getUsers)

router.post('/',
    [authJwt.verifyToken, verifySignUp.checkRolesExisted, verifySignUp.checkDuplicateUser],
        userCtrl.createUser)

router.get('/:userId',
    [authJwt.verifyToken, verifySignUp.checkRolesExisted, verifySignUp.checkDuplicateUser], 
        userCtrl.getUserById)

router.delete('/:userId', 
    [authJwt.verifyToken, verifySignUp.checkRolesExisted, verifySignUp.checkDuplicateUser], 
        userCtrl.deleteUser)

router.put('/:userId', 
    [authJwt.verifyToken, verifySignUp.checkRolesExisted, verifySignUp.checkDuplicateUser], 
        userCtrl.updateUserById)

export default router