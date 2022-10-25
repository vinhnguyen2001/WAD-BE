const mongoose = require("mongoose");

async function connect() {
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
