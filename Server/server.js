require('dotenv').config();
const express=require('express');
require('./DB');
const cors=require('cors');
const RouterEmployee = require('./Routs/EmployeeRout');

const app=express();
app.use(express.json());
app.use(cors());
const PORT =process.env.PORT ||1998 
app.listen(PORT)
app.get('/',(req,res)=>res.send("is working"))
app.post('/',(req,res)=>res.send('add'))
app.use('/employees',RouterEmployee)