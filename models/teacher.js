// 

const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
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