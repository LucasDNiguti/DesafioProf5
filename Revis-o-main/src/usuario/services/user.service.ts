import tarefaServices from "../../tarefa/services/tarefa.services";
import userModel from "../schemas/user.schema";
import { UserType } from "../types/user.type";

class userService {
    async create(user: UserType) {
        const createdUser = await userModel.create(user)
        return createdUser
    }


    async findAll() {
        const findedUsers = await userModel.find()
        return findedUsers
    }

    async findById(id: string) {
        const findedUsers = await userModel.findById(id)
        return findedUsers
    }

    async update(id:string, user: UserType) {
        try {
            const updateUser = await userModel.findByIdAndUpdate(id, {
                nome: user.nome,
                peso: user.peso,
                senha: user.senha,
                email: user.email
            }, { new: true })
            return updateUser
        } catch (error) {
            throw new Error(`Atualização não realizada: ${error}`)
        }
    }


async delete(id:string) {
    try {
        await userModel.findByIdAndDelete(id)
        return "Usuário Removido"
    } catch (error) {
        throw new Error(`Erro ao remover o usuário: ${error}`)
    }
}
}

export default new tarefaServices