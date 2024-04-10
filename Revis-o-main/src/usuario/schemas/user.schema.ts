import { Schema, model } from "mongoose"

const userSchema = new Schema({
    nome: String,
    peso: Number,
    senha: String,
    email: String
}, { timestamps: true});

export default model("User", userSchema)