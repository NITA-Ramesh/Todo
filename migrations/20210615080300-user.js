'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('new',{
      id:Sequelize.INTEGER
    });
    await queryInterface.createDatabase('tt');
    await queryInterface.addColumn('users','testingcolumn',Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('new');
     await queryInterface.dropDatabase('tt');
     await queryInterface.removeColumn('users','testingcolumn');
  }
};
