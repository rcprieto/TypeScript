import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      console.log(req.body);
      const novoUser = await User.create(req.body);
      res.status(200).json({
        novoUser,
      });
    } catch (e) {
      res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
