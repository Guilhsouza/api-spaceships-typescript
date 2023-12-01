import { Request, Response } from 'express'
import db from '../../connection/dbConnection'

export default async function addCrew(req: Request, res: Response) {
    const { id } = req.params

    try {
        const findShip = await db('spaceship').where({ id }).first()

        if (!findShip) {
            return res.status(404).json({ message: 'Nave não encontrada!' })
        }

        if (findShip.mission) {
            return res.status(400).json({ message: `Nave ${findShip.name_of_spaceship} já esta em missão` })
        }

        await db('spaceship').update('mission', true).where({ id })

        return res.status(200).json({ message: 'nave enviada para missão!!!' })
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno no servidor.' })
    }
}