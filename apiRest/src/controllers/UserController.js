import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const {
        id,
        nome,
        email,
      } = novoUser;
      return res.status(200).json({
        id,
        nome,
        email,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'nome', 'email'],
      });
      // vem do middleware loginRequired, que é usado dentro de userRoutes
      console.log('USER ID(TOKEN)', req.userId);
      console.log('USER EMAIL(TOKEN)', req.userEmail);
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      const {
        id,
        nome,
        email,
      } = user;
      if (user) {
        return res.json({
          id,
          nome,
          email,
        });
      }

      return res.json({
        error: 'Usuário não encontrado',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      // const {
      //   id,
      // } = req.params;
      // vem do loginRequired o req.userId
      if (!req.userId) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.json({
          error: 'Usuário não encontrado',
        });
      }
      const novosDados = await user.update(req.body);
      // const novosDados = await User.update(req.body, {where: { id: id }});
      const {
        id,
        nome,
        email,
      } = novosDados;
      return res.json({
        id,
        nome,
        email,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      // req.params.id,
      await User.destroy({
        where: {
          id: req.userId,
        },
      });
      return res.json(null);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
