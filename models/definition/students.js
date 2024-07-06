const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class students extends Model {}
students.init(
  {
    studentID: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    studentName: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(30),
    },
    rollNumber: {
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
  },
  {
    tableName: "students",
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);

module.exports = students;
