import { Router } from 'express'
import registerShip from '../controllers/spaceship/registerShips'
import sendShipToMission from '../controllers/crew/addCrew'

const routes = Router()

routes.post('/spaceship/register', registerShip)
routes.post('/spaceship/sendMission/:id', sendShipToMission)

export = routes