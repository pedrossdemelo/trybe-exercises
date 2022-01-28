"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PatientsTable = queryInterface.createTable("Patients", {
      patient_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      plan_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Plans',
          key: 'plan_id',
        },
        onDelete: 'CASCADE',
      },
    });

    return PatientsTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("Patients"),
};
