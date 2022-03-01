const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Employee = new schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    // email: { type: String, required: true, unique: true },
    // password: { type: String, required: true },
    // lastLogIn: { type: Date, default: Date.now },
    // isLogIn: { type: Boolean, default: false },
    // isAdmin: { type: Boolean ,default:false},
  },
  // מתי נוצר ומתי השתנה האובייקט
  { timestamps: true }
);
module.exports = mongoose.model("Employee", Employee);
