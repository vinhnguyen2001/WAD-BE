const jwt = require("jsonwebtoken");

exports.createToken = ({ username, id }) => {
  // token contains username and id

  const data = {
    username: username,
    id: id,
  };
  return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "24h",
  });
};
