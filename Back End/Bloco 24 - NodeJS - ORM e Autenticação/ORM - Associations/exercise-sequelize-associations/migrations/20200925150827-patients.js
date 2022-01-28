"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PatientsTable = queryInterface.createTable("Patients", {
      patientId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: "patient_id",
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      planId: {
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
