import { Request, Response } from 'express'
import db from '../../connection/dbConnection'

export default async function sendShipToMission(req: Request, res: Response) {
    const { id } = req.params
    const { name } = req.body
    try {
        if (!name) {
            return res.status(400).json({ message: 'O nome do tripulante precisa ser inserido' })
        }

        const findShip = await db('spaceship').where({ id }).first()

        if (!findShip) {
            return res.status(404).json({ message: 'Nave não encontrada!' })
        }

        const limitCrew = await db('crew').count('spaceship_id').where({ spaceship_id: findShip.id })

        if (findShip.total_crew === limitCrew[0].count) {
            return res.status(400).json({ message: 'O limite de tripulates já foi atingido' })
        }

        const addCrew = await db('crew').insert({ spaceship_id: id, name_of_crew: name })

        return res.status(201).json({ mesasge: `Tripulante ${name} cadastrado com sucesso na nave ${findShip.name_of_spaceship}` })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro interno no servidor' })
    }
}