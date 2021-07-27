'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      nick_gamer:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },      
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
