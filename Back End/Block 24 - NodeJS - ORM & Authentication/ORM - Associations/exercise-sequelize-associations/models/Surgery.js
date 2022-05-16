module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgeryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  }, {
    tableName: 'Surgeries',
    timestamps: false,
    underscored: true,
  });

  return Surgery;
}