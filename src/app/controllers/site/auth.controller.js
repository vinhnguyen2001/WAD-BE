// const Users = require("../../models/user.model");
const userService = require("../../services/users.service");

module.exports = {
  // [GET]
  get: async (req, res, next) => {
    // Users.find({})
    //     .then(users => res.json(users))
    //     .catch(next);\

    // const users = await userService.findAll();
    // res.json(users);

    res.json({ message: "Register" });
  },

  // [POST] /auth/sign-up
  save: async (req, res, next) => {
    try {
      // console.log("req.body", req.body);
      const result = await userService.save(req.body);

      if (result != false) {
        return res.json({
          status: "success",
          res_message: "Register account succeed",
          data: result,
        });
      }
      return res
        .status(200)
        .json({ status: "failure", res_message: "Username is exist" });
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json({ status: "failure", res_message: "Register account fail" });
    }
  },
};
