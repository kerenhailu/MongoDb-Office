const Users = require("../Models/EmployeeModel");
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken')
const register = async (req, res) => {
  if (Users.exists(req.body.email)==true)
    return res.status(400).json({ massage: "email already exists" });
  bcrypt.hash(req.body.password, 10,async (err, hashPass) => {
    if (err) return res.status(500).json({ massage: "error in password hash" });
    req.body.password=hashPass;
    await Users.create(req.body)
      .then((result) => res.status(200).json({ massage: "succsfuly", result }))
      .catch((err) => res.status(500).json({ massage: err }));
  });
};

const logIn=async (req, res) => {
  if (Users.exists(req.body.email) == false) return res.status(400).json({ message: 'Email not found' });
  try {
      const user = await Users.findOne({ email: req.body.email });
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
          if (err) return res.status(500).json({ message: 'Error' });
          if (!isMatch) return res.status(400).json({ message: 'Password incorrect' });
          const token = jwt.sign({user}, process.env.SECRET_KEY, { expiresIn: '1h' });
          return res.status(200).json({ message: 'Login successful', token });
      })
  } catch (err) {
      return res.status(500).json(err);
  };
}
module.exports ={register,logIn};