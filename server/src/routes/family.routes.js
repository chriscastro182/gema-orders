import { Router } from "express"
const router = Router()

import * as familyController from "../controllers/family.controller"
import { authJwt, verifySignUp } from '../middlewares'

router.get('/',
    [authJwt.verifyToken, authJwt.isLead], 
    familyController.getFamilies)

router.post('/',
    [authJwt.verifyToken, authJwt.isLead],
    familyController.createFamily) 

router.get('/:familyId',
    [authJwt.verifyToken, authJwt.isLead], 
    familyController.getFamilyById)

router.delete('/:familyId', 
    [authJwt.verifyToken, authJwt.isLead], 
    familyController.deleteFamily)

router.put('/:familyId', 
    [authJwt.verifyToken, authJwt.isLead], 
    familyController.updateFamilyById)

export default router 
