import { Router } from "express"
import { authJwt, verifySignUp } from '../middlewares'
const router = Router()

import * as authCtrl from '../controllers/auth.controller'

router.post('/signin', authCtrl.signIn)

router.post('/signup', [
    verifySignUp.checkRolesExisted,
    verifySignUp.checkDuplicateUser
], authCtrl.signUp)


export default router