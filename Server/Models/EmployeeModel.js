const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Employee = new schema({
  firstName: String,
  lastName:String
},
// מתי נוצר ומתי השתנה האובייקט
{timestamps:true});
module.exports = mongoose.model('Employee',Employee);
