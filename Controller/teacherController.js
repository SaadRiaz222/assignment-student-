module.exports = {
  createTeacher: (req, res) => {
    try {
      return res.send({
        message: "create teacher",
        response: req.body,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAllTeacher: (req, res) => {
    try {
      return res.send({
        message: "get teachers",
        response: req.query,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  updateTeacher: async (req, res) => {
    try {
      //   const validate = await updateSchema.validateAsync(req.body);
      //   const teacher = await teacherService.updateteacher(validate);
      //   if (teacher.error) {
      //     return res.send({
      //       error: teacher.error,
      //     });
      //   }
      return res.send({
        message: "update teacher api",
        response: req.body,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },
  deleteTeacher: async (req, res) => {
    try {
      //   const validate = await deleteSchema.validateAsync(req.query);
      //   const deleteteacher = await Service.deleteteacher(validate.userId);
      //   if (deleteteacher.error) {
      //     return res.send({
      //       error: deleteteacher.error,
      //     });
      //   }
      //   console.log("delete", deleteteacher.response);
      return res.send({
        message: "delete teacher api",
        response: req.query,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
