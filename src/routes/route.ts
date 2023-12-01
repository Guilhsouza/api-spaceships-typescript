import { Router } from 'express'
import registerShip from '../controllers/spaceship/registerShips'
import addCrew from '../controllers/crew/addCrew'
import sendShipToMission from '../controllers/spaceship/sendShipToMission'

const routes = Router()

routes.post('/spaceship/register', registerShip)
routes.post('/spaceship/sendMission/:id', sendShipToMission)

routes.post('/spaceship/addCrew/:id', addCrew)

export = routes