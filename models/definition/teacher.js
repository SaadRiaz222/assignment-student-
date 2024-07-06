const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class teacher extends Model {}
teacher.init(
  {
    teacherID: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    teacherName: {
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
    tableName: "teacher",
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);

module.exports = teacher;
