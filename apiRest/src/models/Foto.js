import Sequelize, {
  Model,
} from 'sequelize';

import appConfig from '../config/appConfig';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING(150),
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Name cannnot be null',
          },
        },
      },
      filename: {
        type: Sequelize.STRING(150),
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Name cannnot be null',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/${this.getDataValue('filename')}`;
        },
      },

    }, {
      sequelize,
    });
    return this;
  }

  static associate(model) {
    this.belongsTo(model.Aluno, {
      foreignKey: 'aluno_id',
    });
  }
}
