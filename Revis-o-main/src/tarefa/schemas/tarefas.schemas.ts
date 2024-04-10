import { Schema, model } from "mongoose";

const tarefaSchema = new Schema( {
    titulo: String,
    descricao: String,
    data_Criacao: String,
    data_Conclusao: String,
    tipo: String,
    estatos: String,
    usuario_Associado: String
}, { timestamps:true });

export default model("Tarefa", tarefaSchema)
