import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import routes from './routes/route'

const app = express()

app.use(express.json())
app.use(routes)

export = app