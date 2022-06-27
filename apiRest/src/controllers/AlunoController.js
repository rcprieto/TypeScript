import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    console.log(alunos);
    return res.status(200).json(alunos);
  }

  async create(req, res) {
    try {
      console.log(req.body);
      const aluno = await Aluno.create(req.body);
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: [e.errors.map((err) => err.message)],
      });
    }
  }

  async show(req, res) {
    try {
      const {
        id,
      } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno not found'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: [e.errors.map((err) => err.message)],
      });
    }
  }

  async delete(req, res) {
    try {
      const {
        id,
      } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno not found'],
        });
      }
      await aluno.destroy();
      return res.json({
        msg: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: [e.errors.map((err) => err.message)],
      });
    }
  }

  async update(req, res) {
    try {
      const {
        id,
      } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno not found'],
        });
      }
      const alunoAtualizado = await aluno.update(req.body);

      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: [e.errors.map((err) => err.message)],
      });
    }
  }
}

export default new AlunoController();
