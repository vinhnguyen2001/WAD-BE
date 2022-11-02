const userService = require("../../services/users.service");
const { verify } = require("../../middleware/verifyToken");

module.exports = {
  getInfo: async (req, res, next) => {
    try {
      const username = verify(req.headers.token);
      if (username == null) {
        return res.status(400).json({
          status: "failure",
          res_message: "Get info failure",
        });
      }
      const result = await userService.getAccount(username);

      return res.json(result);
    } catch (error) {
      console.error(error);
      res.status(400).json({
        status: "failure",
        res_message: "Get info failure",
      });
    }
  },
};
