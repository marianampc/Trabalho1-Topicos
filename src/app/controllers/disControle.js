import Disciplina from "../models/Disciplina";

// CRUD - Para cada uma das funções necessárias

class disControle {
  
  async listar(req, res) {
    try {
      const DisciplinaController = await Disciplina.find();

      return res.status(200).json(Disciplina);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` });
    }
  }
  
  async criar(req, res) {
    const { codigo, nome, professor, departamento, QtdCretidos} = req.body;

    if (!(codigo && nome && professor && departamento && QtdCretidos)) {
      return res
        .status(422)
        .json({ message: "É obrigatório a transmissão de todos os dados da Disciplina." });
    }

    try {
      const Disciplina = await Disciplina.criar(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` });
    }
  }
  
  async update(req, res) {
    const { id } = req.params;

    const DisciplinaToUpdate = await Disciplina.findOne({
      id: id,
    });

    if (!DisciplinaToUpdate) {
      return res
        .status(422)
        .json({ message: "Matéria não existe. Por favor insira outro código." });
    }

    await Disciplina.update(req.body);

    return res.status(200).json({ message: "Matéria atualizado com sucesso!" });
  }

  async delete(req, res) {
    const DisciplinaToDelete = await Disciplina.findOne({ id: req.params.id });

    if (!DisciplinaToDelete) {
      return res
        .status(422)
        .json({ message: "Matéria não existe. Por favor insira outro código." });
    }

    await Disciplina.deleteOne({ id: req.params.id });

    return res.json({ message: "Matéria foi excluído!" });
  }
}

export default new disControle();
