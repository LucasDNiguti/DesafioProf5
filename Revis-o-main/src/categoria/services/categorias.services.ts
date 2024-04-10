import CategoriaModel from "../schemas/categorias.schemas";
import { CategoriaType } from "../types/categorias.type";

class categoriaServices {
    async create(Categoria: CategoriaType){
    const createdCategoria = await CategoriaModel.create(Categoria)
    return createdCategoria
    }

    async findAll() {
      const findedCategoria = await CategoriaModel.find()
      return findedCategoria
    }

    async findById(id: String) {
      const findedCategoria = await CategoriaModel.findById(id)
      return findedCategoria
    }

    async uptade(id: String, Categoria: CategoriaType) {
        try {
            const updateCategoria = await CategoriaModel.find(id, {
                nome_Categoria : String,
                cor : String 
            }, { new:true });
            return updateCategoria
        } catch (error) {
            throw new Error(`Não foi possível atualizar esta categoria: ${error}`)
        }
    }

    async delete(id: String){
        try {
            await CategoriaModel.findByIdAndDelete(id)
            return "Categoria Removida"
        } catch (error) {
            throw new Error(`A categoria não pode ser removida: ${error}`)
        }
    }
}

export default new categoriaServices()
