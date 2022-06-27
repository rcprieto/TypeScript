module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'alunos',
      'email',

      {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,

      },
    );
  },

  async down() {},
};
