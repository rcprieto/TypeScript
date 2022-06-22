import Sequelize, {
  Model,
} from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING(150),
      sobrenome: Sequelize.STRING(150),
      email: Sequelize.STRING(150),
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
