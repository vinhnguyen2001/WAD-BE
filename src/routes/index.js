const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const accountRoute = require("./account.route");

function route(app) {
  app.use("/auth", authRoute);
  app.use("/account", accountRoute);
}

module.exports = route;
