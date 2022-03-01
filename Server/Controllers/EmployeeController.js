const Employees = require("../Models/EmployeeModel");

// const bcrypt = require("bcrypt");
// const register = async (req, res) => {
//   if (Employees.exists(req.body.email))
//     return res.status(400).send({ massage: "email already exists" });
//   bcrypt.hash(req.body.password, 10, (err, hashPass) => {
//     if (err) return res.status(500).send({ massage: "error in password hash" });
//     await Employees.create({ ...req.body, password: hashPass })
//       .then((result) => res.status(200).send({ massage: "succsfuly" }, result))
//       .catch((err) => res.status(404).send({ massage: err }));
//   });
// };
const GetAllInfo = async (req, res) => {
  // await Employees.find((err, result) => {
  //   if (err) return res.status(404).send({ massage: err });
  //   res.send(result);
  // }).clone
  await Employees.find()
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send({ massage: err }));
};

const GetByIdInfo = async (req, res) => {
  await Employees.find((Employee) => Employee.id === parseInt(req.params.id))
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send({ massage: err }));
};

const PostInfo = async (req, res) => {
  await Employees.create(req.body)
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send({ massage: err }));
};

const PutInfo = async (req, res) => {
  const UpdateEmployee = Employees.find(
    (Employee) => Employee.id === parseInt(req.params.id)
  );
  if (!UpdateEmployee) {
    res.status(404).send("The employee with the given ID was not found.");
  }
  const { firstName, lastName, email } = req.body;
  UpdateEmployee.firstName = firstName;
  UpdateEmployee.lastName = lastName;
  UpdateEmployee.email = email;
  res.send(UpdateEmployee);
  // .then((result) => res.send(result))
  //   .catch((err) => res.status(404).send({ massage: err }));
};

const DeleteInfo = async (req, res) => {
  const DeleteEmployee = Employees.find(
    (Employee) => Employee.id === parseInt(req.params.id)
  );
  if (!employee) {
    res.status(404).send("The employee with the given ID was not found.");
  }
  const index = employees.indexOf(employee);
  await employees.splice(index, 1)
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send({ massage: err }));
  // await Employees.delete(DeleteEmployee)
  //   .then((result) => res.send(result))
  //   .catch((err) => res.status(404).send({ massage: err }));
};
module.exports = {
  GetAllInfo,
  GetByIdInfo,
  PostInfo,
  PutInfo,
  DeleteInfo,
  register,
};
