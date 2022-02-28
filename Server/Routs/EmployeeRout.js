const RouterEmployee=require('express').Router();
const ReqHendler=require('../Controllers/EmployeeController')

RouterEmployee.get('/',ReqHendler.GetAllInfo)
RouterEmployee.get('/:id',ReqHendler.GetByIdInfo)
RouterEmployee.post('/',ReqHendler.PostInfo)
RouterEmployee.put('/:id',ReqHendler.PutInfo)
RouterEmployee.delete('/:id',ReqHendler.DeleteInfo)

module.exports=RouterEmployee;