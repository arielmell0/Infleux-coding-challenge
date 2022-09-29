import * as dotenv from 'dotenv'
dotenv.config()
import express, { urlencoded } from 'express'
import cors from 'cors'
import route from './routes'
import mongoose from 'mongoose'

const app = express();

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use(express.json(), urlencoded({ extended: true }))

app.use(route)


mongoose.connect(process.env.CONNECTIONSTRING as string)
    .then(() => {
        app.emit('databaseConnected')
        console.log('Connected to the database')
    })
    .catch((e: any) => console.log('Ops, falha ao conectar ao banco de dados: ', e))

export default app;