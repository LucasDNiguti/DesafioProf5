import { tarefasTypes } from "../types/tarefas.types";
import tarefasModel from "../schemas/tarefas.schemas";

class tarefaService {
    async created(tarefa: tarefasTypes) {
        const createdTarefa = await tarefasModel.create(tarefa)
        return createdTarefa
    }
    async findAll() {
        const findedTarefas = await tarefasModel.find()
        return findedTarefas
    }
    async findById(id: string) {
        const findedTarefa = await tarefasModel.findById(id)
        return findedTarefa
    }
    async update(id: string, tarefa: tarefasTypes) {
        try {
            const updateTarefa = await tarefasModel.findByIdAndUpdate(id, {
                titulo: tarefa.titulo,
                descricao: tarefa.descricao,
                data_Criacao: tarefa.data_Criacao,
                data_Conclusao: tarefa.data_Conclusao,
                tipo: tarefa.tipo,
                estatos: tarefa.estatos,
                usuario_Associado: tarefa.usuario_Associado
            }, { new: true });
            return updateTarefa
        } catch (error) {
            throw new Error(`Não teve como atualizar a tarefa:${error}`)
        }
    }
    async delete(id: string) {
        try {
            const deleteTarefa = await tarefasModel.findByIdAndDelete(id)
            return deleteTarefa
        } catch (error) {
            throw new Error(`Não teve como deletar a tarefa:${error}`)
        }
    }

}

export default new tarefaService()