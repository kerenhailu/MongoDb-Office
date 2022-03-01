const Users = require("../Models/EmployeeModel");
const bcrypt = require("bcryptjs");
const register = async (req, res) => {
  if (Users.exists(req.body.email)==true)
    return res.status(400).json({ massage: "email already exists" });
  bcrypt.hash(req.body.password, 10,async (err, hashPass) => {
    if (err) return res.status(500).json({ massage: "error in password hash" });
    req.body.password=hashPass;
    await Users.create(req.body)
      .then((result) => res.status(200).json({ massage: "succsfuly", result }))
      .catch((err) => res.status(404).json({ massage: err }));
  });
};
module.exports ={register}