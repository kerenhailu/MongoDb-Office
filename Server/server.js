require('dotenv').config();
const express=require('express');
require('./DB');
const cors=require('cors');
const controllers=require('./Controllers/EmployeeController')
const RouterEmployee = require('./Routs/EmployeeRout');
const app=express();
app.use(express.json());
app.use(cors());
app.listen(process.env.PORT)
app.get('/',(req,res)=>res.send("is working"))
app.use('/employees',RouterEmployee)