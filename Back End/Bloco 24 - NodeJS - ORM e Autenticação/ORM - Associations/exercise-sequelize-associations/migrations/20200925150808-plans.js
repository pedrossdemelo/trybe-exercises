"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PlansTable = queryInterface.createTable("Plans", {
      planId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: "plan_id",
      },
      coverage: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
    });

    return PlansTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("Plans"),
};
