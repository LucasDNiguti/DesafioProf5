import express from 'express'
import mongoose from 'mongoose';
import { routes } from './routes'

class App {
    public express = express.Application

    constructor() {
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }
    public middleware(){ //recebe o corpo de json - req.body
        this.express.use(express.json());
    }

    public async database(){
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/usuarios-api');
            console.log("Sucesso ao conectar com o banco de Dados")
        } catch (error) {
            console.log("Não foi possível conectar na base de dados",error)
        }
    }

    public routes(){
        this.express.use(routes);
    }
}

export default new App().express