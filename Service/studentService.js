const studentModel = require("../models/studentModels");
// const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");

module.exports = {
  createStudent: async (body) => {
    try {
      //   body.password = await hash(body.password, 10);
      body.studentID = uuid();
      const student = await studentModel.createStudent(body);
      if (student.error) {
        return {
          error: student.error,
        };
      }
      //   delete student.response.dataValues.password;
      return {
        response: student,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  updateStudent: async (body) => {
    try {
      const updateStudent = await studentModel.updateStudent(body);
      if (updateStudent.error || !updateStudent.response[0]) {
        return {
          error: {
            message: "unable to update",
            error: updateStudent?.error || updateStudent.response,
          },
        };
      }
      return {
        message: "student deleted",
        response: updateStudent.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllStudents: async () => {
    try {
      const students = await studentModel.getAllStudents();
      if (students.error) {
        return {
          error: students.error,
        };
      }
      return {
        response: students.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteStudent: async (studentID) => {
    try {
      const deleteStudent = await studentModel.deleteStudent(studentID);
      if (deleteStudent.error || !deleteStudent.response) {
        return {
          error: {
            message: "unable to delete",
            error: deleteStudent?.error || deleteStudent.response,
          },
        };
      }
      return {
        message: "student deleted",
        response: deleteStudent.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
