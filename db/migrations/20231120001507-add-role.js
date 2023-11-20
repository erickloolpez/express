'use strict';

const {userSchema, USER_TABLE} = require('../models/user.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE, 'role', userSchema.role)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(USER_TABLE, 'role', userSchema.role)
  }
};
