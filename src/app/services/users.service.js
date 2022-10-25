const bcrypt = require("bcrypt");
const Users = require("../models/user.model");

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
    const isExist = await Users.find({ username: info.username }).exec();

    if (0 < isExist.length) {
      return false;
    }

    // hash password
    const salt = await bcrypt.genSalt(); // Thêm muối
    const hashedPwd = await bcrypt.hash(info.password, salt);
    var newUser = new Users({ ...info, password: hashedPwd });

    newUser = await newUser.save();

    return newUser;
  },
};
