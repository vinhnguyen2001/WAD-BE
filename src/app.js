const express = require("express");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const route = require("./routes");
const path = require("path");
const properties = require("./config/connect/properties");
const port = 4000;
const db = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

// Connect to DB
db.connect();

const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
