// 

const { Model, DataTypes, Sequelize } = require("sequelize");
module.exports = (Sequelize) => {
  class Teacher extends Model {}

  Teacher.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: "Teacher",
      tableName: "Teachers",
      timestamps: true
    }

  );
  return Teacher;
};