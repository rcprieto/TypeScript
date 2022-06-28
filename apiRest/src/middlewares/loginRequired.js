import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const {
    authorization,
  } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [texto, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const {
      id,
      email,
    } = dados;
    // Sempre vai no banco para verificar se mudou o email
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário Inválido (atualizar token)'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token invalido ou expirado'],
    });
  }
};
