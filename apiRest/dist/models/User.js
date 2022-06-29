"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING(150),
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
        type: _sequelize2.default.STRING(150),
        defaultValue: '',
      },
      email: {
        type: _sequelize2.default.STRING(150),
        defaultValue: '',
        unique: {
          arg: true,
          msg: 'This email already exists',
        },
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
        },

      },
      password: {
        type: _sequelize2.default.VIRTUAL,
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
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
