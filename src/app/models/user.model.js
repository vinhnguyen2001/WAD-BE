const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const UserSchema = new Schema(
  {
    _id: { type: Number },
    username: { type: String, maxLength: 50, require: true },
    password: { type: String, require: true },
    status: { type: Boolean, default: 1 },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
    },
  },
  {
    _id: false,
    timestamps: true,
  }
);

// Add plugins

UserSchema.plugin(AutoIncrement); // set auto increment for id

module.exports = mongoose.model("Users", UserSchema);
