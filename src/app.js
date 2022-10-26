const express = require("express");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const route = require("./routes");
const path = require("path");
const properties = require("./config/connect/properties");
var cors = require("cors");
const db = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;

// Connect to DB
db.connect();

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
