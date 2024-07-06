const route = require("express").Router();
const {
  getAllTeacher,
  createTeacher,
  deleteTeacher,
  updateTeacher,
} = require("../Controller/teacherController");
route.get("/getAllTeachers", getAllTeacher);
route.post("/createTeacher", createTeacher);
route.delete("/deleteTeacher", deleteTeacher);
route.put("/updateTeacher", updateTeacher);

module.exports = route;
