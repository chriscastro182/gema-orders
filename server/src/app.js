import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import cors from 'cors'

import { createRoles } from './libs/initialSetup'

import orderRoutes from './routes/orders.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import technicianRoutes from './routes/technician.routes'
import clientRoutes from './routes/client.routes'
import familyRoutes from './routes/family.routes'
import applianceRoutes from './routes/appliance.routes'
import enterpriseRoutes from './routes/enterprise.routes'
import catalogsRoutes from './routes/catalogs.routes'

const app = express()
//const cors = requre('cors')
createRoles();

app.set('pkg', pkg)

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res)=> {
    res.json({
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
        author: app.get('pkg').name,
    })
})

app.use('/api/orders',orderRoutes)
app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/technicians',technicianRoutes)
app.use('/api/clients',clientRoutes)
app.use('/api/families',familyRoutes)
app.use('/api/appliances',applianceRoutes)
app.use('/api/enterprises',enterpriseRoutes)
app.use('/api/catalogs',catalogsRoutes)

 


export default app;