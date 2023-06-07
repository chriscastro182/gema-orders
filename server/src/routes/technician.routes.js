import { Router } from "express"
const router = Router()

import * as technicianController from "../controllers/technician.controller"
import { authJwt, verifySignUp } from '../middlewares'

router.get('/',
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    technicianController.getTechnicians)

router.post('/',
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead],
        technicianController.createTechnician)

router.get('/:technicianId',
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    technicianController.getTechnicianById)

router.delete('/:technicianId', 
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    technicianController.deleteTechnician)

router.put('/:technicianId', 
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    technicianController.updateTechnicianById)

export default router 
