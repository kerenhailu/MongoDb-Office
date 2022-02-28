const Employees = require("../Models/EmployeeModel");
const GetAllInfo = async (req, res) => {
  // await Employees.find((err, result) => {
  //   if (err) return res.status(404).send({ massage: err });
  //   res.send(result);
  // }).clone
  await Employees.find()
  .then((result)=>res.send(result))
  .catch((err)=>res.status(404).send({ massage: err }))
}


const GetByIdInfo =async (req, res) => {
  await Employees.find((Employee) => Employee.id === parseInt(req.params.id))
  .then((result)=>res.send(result))
  .catch((err)=>res.status(404).send({ massage: err }))
};

const PostInfo =async (req, res) => {
  await Employees.create(req.body)
  .then((result)=>res.send(result))
  .catch((err)=>res.status(404).send({ massage: err }))
  
};
const PutInfo =async (req, res) => {
  await Employees.find((Employee) => Employee.id === parseInt(req.params.id))
  .then((result)=>res.send(result))
  .catch((err)=>res.status(404).send({ massage: err }))
};
const DeleteInfo =async (req, res) => {
  await Employees.find((Employee) => Employee.id === parseInt(req.params.id))
  .then((result)=>res.send(result))
  .catch((err)=>res.status(404).send({ massage: err }))
};
module.exports = { GetAllInfo, GetByIdInfo, PostInfo, PutInfo, DeleteInfo };
