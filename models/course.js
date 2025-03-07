// 

'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Student extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Student.init({
//     name: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Student',
//   });
//   return Student;
// };

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Course extends Model {}

  Course.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: { // ✅ Ensure this column exists
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: "Course",
      tableName: "Courses",
      timestamps: true
    }
  );

  return Course;
};
