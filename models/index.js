const sequelize = require("../bin/dbConnection");

const student = require("./definition/students");
const teacher = require("./definition/teacher");

const models = { student, teacher };

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
