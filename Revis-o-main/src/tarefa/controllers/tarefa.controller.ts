import { Request, Response } from 'express'
import tarefaService from "../services/tarefa.services";

class tarefaController {
    async create(req: Request, res: Response) {
        const createdTarefa = await tarefaService.create(req.body)
        res.status(201)
        return res.json(createdTarefa)
    }
    async findAll(req: Request, res: Response) {
        const findedTarefas = await tarefaService.find(req.params.id)
        return res.json(findedTarefas)
    }
    async findById(req: Request, res: Response) {
        const findedTarefa = await tarefaService.findById(req.params.id)
        return res.json(findedTarefa)
    }
    async update(req: Request, res: Response) {
        try {
            const uptadeTarefa = await tarefaService.findByIdAndUpdate.update(req.params.id, req.body)
            return res.json(uptadeTarefa)
        } catch (error) {
            throw new Error(`Atualização não realizada:${error}`)
        }
    }
    async delete(req: Request, res: Response){
        try {
            const deleteTarefa = await tarefaService.findByIdAndDelete.delete(req.params.id)
            return res.json(deleteTarefa)
        } catch (error) {
            throw new Error(`A tarefa não foi deletada:${error}`)
        }
    }
}
