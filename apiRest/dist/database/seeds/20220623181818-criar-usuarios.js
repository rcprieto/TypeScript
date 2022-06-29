"use strict";const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [

        {
          nome: 'John Doe',
          email: 'rcadsa@dasd.com',
          password_hash: await bcrypt.hashSync('123456', 9),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luis Doe',
          email: 'rcaafgdsa@dasd.com',
          password_hash: await bcrypt.hashSync('123456', 9),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Pualo Doe',
          email: 'rcasdadsa@dasd.com',
          password_hash: await bcrypt.hashSync('123456', 9),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Jonata Doe',
          email: 'rcatgsdsa@dasd.com',
          password_hash: await bcrypt.hashSync('123456', 9),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  async down() {},
};
