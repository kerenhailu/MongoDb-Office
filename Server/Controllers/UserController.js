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

const logIn=async(req,res)=>{
  if(Users.exists(req.body.email)==true) return res.status(400).json({ massage: "email already exists" });
  const {email,password}=req.body
  const user = Users.findOne(user=>user.email===email);
  bcrypt.compare(password,user.password,(err,isMatch)=>{
    if(err)return res.status(500).json({ massage: "err in compare" });
    if(!isMatch)  return res.status(403).json({ massage: "incorrect password" })
    jwt.sign(user,process.env.SECRET_OR_KEY),{expiresIn:3600},(err,token)=>{}
    res.status(200).json({massage:"logIn successful",user})
  })
}
module.exports ={register,logIn}