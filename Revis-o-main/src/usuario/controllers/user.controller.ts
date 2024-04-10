import {Request, Response} from 'express'
import userService from "./usuario/services/user.services";


class userController {
    async create(req: Request, res: Response) {
        const createdUser = await userService.create(req.body)
        res.status(201)
        return res.json(createdUser)
    }

    async findAll(req: Request, res: Response) {
        const findedUsers = await userService.findAll()
        return res.json(findedUsers)
    }

    async findById(req: Request, res: Response){
         const findedUser = await userService.findedById(req.params.id)
         return res.json(findedUser)
    }

    async update(req: Request, res:Response){
        const updateUser = await userService.update(req.params.id, req.body)
        return res.json(updateUser)
    }

    async delete(req: Request, res: Response){
       const deleteUser = await userService.deleteUser(req.params.id)
       return res.json(deleteUser)
    }

}

export default new userController()