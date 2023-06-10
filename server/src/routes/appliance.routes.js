import { Router } from "express"
const router = Router()

import * as applianceController from "../controllers/appliance.controller"
import { authJwt, verifySignUp } from '../middlewares'

router.get('/',
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    applianceController.getAppliances)

router.post('/',
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead],
    applianceController.createAppliance) 

router.get('/:applianceId',
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    applianceController.getApplianceById)

router.delete('/:applianceId', 
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    applianceController.deleteAppliance)

router.put('/:applianceId', 
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    applianceController.updateApplianceById)

export default router 


 