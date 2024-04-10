import { Router} from 'express'
import userController from './usuario/controllers/user.controller'
import categoriaController from './categoria/controllers/categorias.controllers'
import tarefaController from './tarefa/controllers/tarefa.controller'

const routes = Router()

routes.post('/users', userController.create)
routes.get('/users', userController.findAll)
routes.get('/user/:id', userController.findById)
routes.put('/user/:id', userController.update)
routes.delete('/user/:id', userController.delete)

routes.post('/categorias', categoriaController.create)
routes.get('/categorias', categoriaController.findAll)
routes.get('/categorias', categoriaController.findByid)
routes.put('/categorias', categoriaController.update)
routes.delete('/categorias', categoriaController.delete)

routes.post('/tarefas', tarefaController.create)
routes.get('/tarefas', tarefaController.findAll)
routes.get('/tarefas', tarefaController.findById)
routes.put('/tarefas', tarefaController.update)
routes.delete('/tarefa', tarefaController.delete)
