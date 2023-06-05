import { Router } from "express"
const router = Router()

import * as userCtrl from "../controllers/user.controller"
import { authJwt, verifySignUp } from '../middlewares'

router.post('/',
    [authJwt.verifyToken, verifySignUp.checkRolesExisted, verifySignUp.checkDuplicateUser],
    userCtrl.createUser)

export default router