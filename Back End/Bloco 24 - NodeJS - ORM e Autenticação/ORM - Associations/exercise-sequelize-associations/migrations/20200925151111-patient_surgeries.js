'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patient_surgeries', {
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Patients',
          key: 'patient_id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      surgery_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Surgeries',
          key: 'surgery_id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Patient_surgeries');
  },
};
