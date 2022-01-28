module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    tableName: 'Plans',
    timestamps: false,
    underscored: true,
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, {
      foreignKey: 'plan_id',
      as: 'users',
    });
  };

  return Plan;
}