'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Plans',
      [
        {
          coverage: 'Total',
          price: 549.99,
        },        {
          coverage: 'Partial',
          price: 349.99,
        },
        {
          coverage: 'Emergencies only',
          price: 109.99,
        },
        {
          coverage: 'Family',
          price: 949.99,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plans', null, {});
  },
};
