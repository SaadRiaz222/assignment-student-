const { models } = require("./index");

module.exports = {
  createStudent: async (body) => {
    try {
      console.log("Body", body);
      console.log("Models:", models); // Check if models is defined and accessible
      console.log("Student Model:", models.student); // Check the structure of the student model
      const student = await models.student.create({ ...body });
      return {
        response: student,
      };
    } catch (error) {
      console.log("Error From Model", error);
      return {
        error: error,
      };
    }
  },

  updateStudent: async ({ studentID, ...body }) => {
    try {
      const student = await models.student.update(
        { ...body },
        {
          where: {
            studentID: studentID,
          },
        }
      );
      return {
        response: student,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllStudents: async () => {
    try {
      const students = await models.student.findAll({
        // attributes:["password","studentID"]    student to show the value which you want to show
        attributes: {
          exclude: ["password"],
        },
        paranoid: false,
      });

      console.log("students", students);
      return {
        response: students,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteStudent: async (studentID) => {
    try {
      const deleteStudent = await models.student.destroy({
        where: {
          studentID: studentID,
        },
      });
      return {
        response: deleteStudent,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
