"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING(150),
        defaultValue: '',
        validate: {
          len: {
            args: [3, 150],
            msg: 'Nome deve ter entre 3 e 5 caracteres',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING(150),
        defaultValue: '',
        validate: {
          len: {
            args: [3, 150],
            msg: 'Nome deve ter entre 3 e 5 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING(150),
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
        type: _sequelize2.default.INTEGER,
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
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
} exports.default = Aluno;
