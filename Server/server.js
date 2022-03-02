require('dotenv').config();
const express=require('express');
require('./DB');
const cors=require('cors');
const RouterEmployee = require('./Routs/EmployeeRout');
const RouterUser=require('./Routs/UserRout')

const app=express();
app.use(express.json());
app.use(cors());
const PORT =process.env.PORT ||1998 
app.listen(PORT)
// app.register('/',(req,res)=>res.send('register'))
// app.get('/',(req,res)=>res.send('workk'))
// app.post('/',(req,res)=>res.send('add'))
// app.put('/',(req,res)=>res.send('workk put'))
// app.delete('/',(req,res)=>res.send('workk delete'))
// app.use('/employees',RouterEmployee)

// http://localhost:1998/auth/register
app.use('/auth',RouterUser)