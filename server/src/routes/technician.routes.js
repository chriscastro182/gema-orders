import { Router } from "express"
const router = Router()

import * as technicianController from "../controllers/technician.controller"
import { authJwt, verifySignUp } from '../middlewares'

router.get('/',
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin], 
    technicianController.getTechnicians)

router.post('/',
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin],
        technicianController.createTechnician)

router.get('/:technicianId',
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin], 
    technicianController.getTechnicianById)

router.delete('/:technicianId', 
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin], 
    technicianController.deleteTechnician)

router.put('/:technicianId', 
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin], 
    technicianController.updateTechnicianById)

export default router 
