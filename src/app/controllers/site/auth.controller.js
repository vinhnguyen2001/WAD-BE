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

    res.json({ message: "Hello buddy" });
  },

  getInfo: async (req, res, next) => {
    try {
      const result = await userService.getAccount(req.params.username);
      return res.json(result);
    } catch (error) {
      console.error(error);
      res.status(400).json({
        status: "failure",
        res_message: "Get info failure",
      });
    }
  },

  // [POST] /auth/sign-up
  save: async (req, res, next) => {
    try {
      const result = await userService.save(req.body);

      return res.json(result);
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json({ status: "failure", res_message: "Register account failure" });
    }
  },

  authentication: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const result = await userService.authentication({ username, password });
      return res.json(result);
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json({ status: "failure", res_message: "Authentication failure" });
    }
  },
};
