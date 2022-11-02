const jwt = require("jsonwebtoken");

exports.verify = (token) => {
  // token contains username and id
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("decoded", decoded);
    return decoded.username;
  } catch (err) {
    return null;
  }
};
