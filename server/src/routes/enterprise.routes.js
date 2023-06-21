import { Router } from "express"
const router = Router()

import * as enterpriseController from "../controllers/enterprise.controller"
import { authJwt, verifySignUp } from '../middlewares'

router.get('/',
    [authJwt.verifyToken, authJwt.isLead], 
    enterpriseController.getEnterprises)

router.post('/',
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead],
    enterpriseController.createEnterprise) 

router.get('/:enterpriseId',
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    enterpriseController.getEnterpriseById)

router.delete('/:enterpriseId', 
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    enterpriseController.deleteEnterprise)

router.put('/:enterpriseId', 
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    enterpriseController.updateEnterpriseById)

export default router 

