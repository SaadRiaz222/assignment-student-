const route = require("express").Router();
const {
  getAllStudent,
  createStudent,
  deleteStudent,
  updateStudent,
} = require("../Controller/studentController");
route.get("/getAllStudents", getAllStudent);
route.post("/createStudent", createStudent);
route.delete("/deleteStudent", deleteStudent);
route.put("/updateStudent", updateStudent);

module.exports = route;
