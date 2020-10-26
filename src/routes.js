//Este código serve para cuidar das rotas da Nossa API
import { Router } from "express"; 

import disControle from "./app/controllers/disControle";

const routes = new Router();

routes.post("/disciplinas", disControle.criar); //Criar
routes.get("/disciplinas", disControle.listar); //Listar

routes.put("/disciplinas/:id", disControle.update); //Atualizar
routes.delete("/disciplinas/:id", disControle.delete); //Retirar

export default routes;
