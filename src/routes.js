//Este código serve para cuidar das rotas da Nossa API
import { Router } from "express"; /

import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.get("/disciplinas", UserController.index); //Criar
routes.post("/disciplinas/:codigo?:nome?:professor?:departamento?:QtdCretidos", UserController.store); //Listar

routes.put("/disciplinas/:id", UserController.update); //Atualizar
routes.delete("/disciplinas/:id", UserController.delete); //Retirar

export default routes;
