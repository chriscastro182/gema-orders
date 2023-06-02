import { Router } from "express"
const router = Router()

import * as userCtrl from "../controllers/user.controller"
import { authJwt } from '../middlewares'

router.post('/', [
    authJwt.verifyToken,
    authJwt.isLead
], userCtrl.createUser)

export default router