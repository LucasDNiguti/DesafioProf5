import { Schema, model } from "mongoose"

const categoriaSchema = new Schema({
    nome_Categoria : String,
    cor : String
}, {timestamps: true});

export default model("Categoria", categoriaSchema)