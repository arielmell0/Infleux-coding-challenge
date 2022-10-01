import * as dotenv from 'dotenv'
dotenv.config()
import express, { urlencoded } from 'express'
import cors from 'cors'
import route from './routes'
import mongoose from 'mongoose'

const app = express();

app.use(cors())
app.use(express.json(), urlencoded({ extended: true }))

app.use(route)

mongoose.connect(process.env.CONNECTIONSTRING as string)
    .then(() => {
        app.emit('databaseConnected')
        console.log('Connected to the database')
    })
    .catch((e: any) => console.log('Ops, falha ao conectar ao banco de dados: ', e))

export default app;