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
const GetByIdInfo = (req, res) => {
  // await Employees.find()
  // .then((result)=>res.send(result))
  // .catch((err)=>res.status(404).send({ massage: err }))
};
const PostInfo = (req, res) => {
  res.send();
};
const PutInfo = (req, res) => {
  res.send();
};
const DeleteInfo = (req, res) => {
  res.send();
};
module.exports = { GetAllInfo, GetByIdInfo, PostInfo, PutInfo, DeleteInfo };
