const mongoose = require("mongoose");

const CONECCTION_STRING = process.env.CONECCTION_STRING;
mongoose.connect(CONECCTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log('mongo connect'))
.catch(()=>console.log('mongo not connect'))
module.exports = mongoose.connection;
