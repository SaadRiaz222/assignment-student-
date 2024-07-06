const studentService = require("../Service/studentService");
module.exports = {
  createStudent: async (req, res) => {
    try {
      const student = await studentService.createStudent(req.body);
      if (student.error) {
        console.log("stud", student.error);
        return res.send({
          error: student.error,
        });
      }
      return res.send({
        message: "create Student",
        response: student.response,
      });
    } catch (error) {
      console.log("stud2", student.error);
      return res.send({
        error: error,
      });
    }
  },
  getAllStudent: async (req, res) => {
    try {
      const students = await studentService.getAllStudents();
      if (students.error) {
        return res.send({
          response: students.error,
        });
      }
      return res.send({
        message: "get student",
        response: students.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  updateStudent: async (req, res) => {
    try {
      const student = await studentService.updateStudent(req.body);
      if (student.error) {
        return res.send({
          error: student.error,
        });
      }
      return res.send({
        message: "update student api",
        response: req.body,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },
  deleteStudent: async (req, res) => {
    try {
      const validate = req.query;
      const deleteStudent = await studentService.deleteStudent(
        validate.studentID
      );
      if (deleteStudent.error) {
        return res.send({
          error: deleteStudent.error,
        });
      }
      return res.send({
        message: "delete student api",
        response: req.query,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
