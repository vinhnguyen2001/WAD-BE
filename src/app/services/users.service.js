const bcrypt = require("bcrypt");
const Users = require("../models/user.model");
const { createToken } = require("../middleware/jwt");

module.exports = {
  findAll: async () => {
    const users = await Users.find()
      .then()
      .catch((err) => {
        throw Error(err);
      });

    return users;
  },

  save: async (info) => {
    let isExist = await Users.find({ username: info.username }).exec();
    // console.log("isExisit lần 1", isExist);

    if (0 < isExist.length) {
      return { status: "failure", res_message: "Username already exists" };
    }

    isExist = await Users.find({ email: info.email }).exec();

    if (0 < isExist.length) {
      return { status: "failure", res_message: "Email already exists" };
    }
    // hash password
    const salt = await bcrypt.genSalt(); // Thêm muối
    const hashedPwd = await bcrypt.hash(info.password, salt);
    var newUser = new Users({ ...info, password: hashedPwd });

    newUser = await newUser.save();

    return {
      status: "success",
      res_message: "Register account succeed",
      data: newUser,
    };
  },

  getAccount: async (username) => {
    let account = await Users.find({ username: username }).exec();

    if (account.length < 0) {
      return { status: "failure", res_message: "Username doesn't exists" };
    }
    account[0].password = null;

    return {
      status: "success",
      res_message: "Get info on the account successfully",
      data: account[0],
    };
  },

  authentication: async ({ username, password }) => {
    let account = await Users.find({ username: username }).exec();

    if (account.length < 0) {
      return { status: "failure", res_message: "Username doesn't exists" };
    }
    const isPwd = await bcrypt.compare(password, account[0].password);

    // console.log("isPWD", isPwd);
    if (!isPwd) {
      return { status: "failure", res_message: "Password is incorrect" };
    }

    account[0].password = null;

    const token = createToken({
      username: account[0].username,
      id: account[0].id,
    });
    return {
      status: "success",
      res_message: "Authentication success",
      data: account,
      token: token,
    };
  },
};
