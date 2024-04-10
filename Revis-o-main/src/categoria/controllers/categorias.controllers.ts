import {Request, Response} from 'express'
import categoriaService from "../services/categorias.services";

class categoriaController {
    async create(req: Request, res: Response){
        const createdCategoria = await categoriaService.create(req.body)
        res.status(201)
        return res.json(createdCategoria)
    } 

    async findAll(req: Request, res: Response) {
        const findedCategorias = await categoriaService.find()
        return res.json(findedCategorias)
    }

    async findByid(req: Request, res:Response) {
        const findedCategoria = await categoriaService.find(req.params.id)
        return res.json(findedCategoria)
    }

    async update(req: Request, res:Response) {
        const updateCategoria = await categoriaService.update(req.params.id, req.body)
        return res.json(updateCategoria)
    }

    async delete(req: Request, res:Response) {
        const deleteCategoria = await categoriaService.deleteCategoria(req.params.id)
        return res.json(deleteCategoria)
    }
}

export default new categoriaController()