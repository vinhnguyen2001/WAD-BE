const mongoose = require("mongoose");
const props = require("../connect/properties");
async function connect() {
  // console.log("props", props.DB);
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connect successfully");
  } catch (error) {
    console.error(error);
    console.log("Connect fail !");
  }
}

module.exports = { connect };
