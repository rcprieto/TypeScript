import Sequelize, {
  Model,
} from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING(150),
        defaultValue: '',
        validate: {
          len: {
            args: [3, 150],
            msg: 'Nome deve ter entre 3 e 5 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING(150),
        defaultValue: '',
        validate: {
          len: {
            args: [3, 150],
            msg: 'Nome deve ter entre 3 e 5 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING(150),
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
          unique: {
            msg: 'E-mail already exists',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, {
      foreignKey: 'aluno_id',
    });
  }
}
