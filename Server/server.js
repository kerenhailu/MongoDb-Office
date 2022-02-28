require('dotenv').config();
const express=require('express');
const app=express();
require('./DB');
app.use(express.json());
const controllers=require('./Controllers/EmployeeController')
const cors=require('cors');
const RouterEmployee = require('./Routs/EmployeeRout');
app.use(cors())
app.use('/',RouterEmployee)
app.listen(process.env.PORT)
