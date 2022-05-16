"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const SurgeriesTable = queryInterface.createTable("Surgeries", {
      surgeryId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: "surgery_id",
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
