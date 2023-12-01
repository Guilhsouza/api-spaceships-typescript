import { Router } from 'express'
import registerShip from '../controllers/spaceship/registerShips'

const routes = Router()

routes.post('/spaceship/register', registerShip)

export = routes