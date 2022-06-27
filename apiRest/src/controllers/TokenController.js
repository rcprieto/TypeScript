import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const {
      email = '', password = '',
    } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas 1'],
      });
    }

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Credenciais inválidas 2', email],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Credenciais inválidas Senha inválida'],
      });
    }
    const {
      id,
    } = user;
    const token = jwt.sign({
      id,
      email,
    }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.status(200).json({
      token,
    });
  }
}

export default new TokenController();
