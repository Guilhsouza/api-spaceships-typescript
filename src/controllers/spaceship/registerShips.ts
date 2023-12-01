import { Request, Response } from 'express'
import db from '../../connection/dbConnection'

export default async function registerShip(req: Request, res: Response) {
    const { nameSpaceship, pilotName, totalCrew } = req.body

    try {
        if (!nameSpaceship || !pilotName || !totalCrew) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.' })
        }

        const createSpaceship = await db('spaceship')
            .insert({
                name_of_spaceship: nameSpaceship,
                pilot_name: pilotName,
                total_crew: totalCrew
            })

        return res.status(201).json({ message: `Nave ${nameSpaceship} criada com sucesso!` })
    } catch (error) {
        res.status(500).json({ message: 'Erro interno no servidor.' })
    }
}

