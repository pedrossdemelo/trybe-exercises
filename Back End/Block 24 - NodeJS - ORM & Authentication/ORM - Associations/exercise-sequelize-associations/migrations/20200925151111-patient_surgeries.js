'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patient_surgeries', {
      patientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Patients',
          key: 'patient_id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
        field: 'patient_id',
      },
      surgeryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Surgeries',
          key: 'surgery_id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
        field: 'surgery_id',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Patient_surgeries');
  },
};
