const mongoose = require("mongoose");

const STRING_CONECCTION = process.env.CONECCTION_STRING;
mongoose.connect(STRING_CONECCTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log('mongo connect'))
.catch(()=>console.log('mongo not connect'))
module.exports = mongoose.connection;
