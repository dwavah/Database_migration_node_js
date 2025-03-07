// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Assignment extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Assignment.init({
//     title: DataTypes.STRING,
//     due_date: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'Assignment',
//   });
//   return Assignment;
// };

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {  // Fix: lowercase 'sequelize'
  class Assignment extends Model {}

  Assignment.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,  // Fix: lowercase 'sequelize'
      modelName: "Assignment",
      tableName: "Assignments",
      timestamps: true
    }
  );

  return Assignment;
};
