import Sequelize, {
  Model,
} from 'sequelize';

import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING(150),
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo nome não pode ser nulo',
          },
          len: {
            args: [3, 150],
            msg: 'Campo Nome deve ter entre 3 e 150 caracteres',
          },
        },

      },
      password_hash: {
        type: Sequelize.STRING(150),
        defaultValue: '',
      },
      email: {
        type: Sequelize.STRING(150),
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo email não pode ser nulo',
          },
          len: {
            args: [0, 150],
            msg: 'Campo Email deve ter entre 0 e 150 caracteres',
          },
          isEmail: {
            msg: 'Preencha um email válido.',
          },
          unique: {
            msg: 'Email já existe!',
          },
        },

      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo senha não pode ser nulo',
          },
          len: {
            args: [6, 50],
            msg: 'Campo Senha deve ter entre 6 e 50 caracteres',
          },
        },

      }, // Notmapped
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }
}
