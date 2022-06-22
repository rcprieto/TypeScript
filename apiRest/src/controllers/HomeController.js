import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rodrigo',
      sobrenome: 'Prieto',
      email: 'rcprieto@gmailcom',
      idade: 41,
      peso: 100,
      altura: 1.73,
    });
    res.status(200).json({
      novoAluno,
    });
  }
}

export default new HomeController();
