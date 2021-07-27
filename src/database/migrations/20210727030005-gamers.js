'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gamers', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: 'users', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      gender:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      platform:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      hours_played:{
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
    await queryInterface.dropTable('gamers');
  }
};
