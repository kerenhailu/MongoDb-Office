const Employees = require("../Models/EmployeeModel");
const GetAllInfo = async (req, res) => {
  await Employees.find((err, result) => {
    if (err) return res.status(404).send({ massage: err });
    res.send(result);
  });
};
const GetByIdInfo = (req, res) => {
  // Employees.find()
  res.send();
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
