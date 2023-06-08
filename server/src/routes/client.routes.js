import { Router } from "express"
const router = Router()

import * as clientController from "../controllers/client.controller"
import { authJwt, verifySignUp } from '../middlewares'

router.get('/',
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    clientController.getClients)

router.post('/',
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin, authJwt.isLead],
    clientController.createClient)

router.get('/:clientId',
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    clientController.getClientById)

router.delete('/:clientId', 
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    clientController.deleteClient)

router.put('/:clientId', 
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    clientController.updateClientById)

export default router 

