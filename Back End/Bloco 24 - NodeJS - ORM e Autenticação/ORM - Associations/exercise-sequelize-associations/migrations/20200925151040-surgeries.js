"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const SurgeriesTable = queryInterface.createTable("Surgeries", {
      surgery_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      specialty: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      doctor: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    return SurgeriesTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("Surgeries"),
};
