const bcrypt = require("bcrypt");
const register = async (req, res) => {
  if (Employees.exists(req.body.email))
    return res.status(400).send({ massage: "email already exists" });
  bcrypt.hash(req.body.password, 10, (err, hashPass) => {
    if (err) return res.status(500).send({ massage: "error in password hash" });
    await Employees.create({ ...req.body, password: hashPass })
      .then((result) => res.status(200).send({ massage: "succsfuly" }, result))
      .catch((err) => res.status(404).send({ massage: err }));
  });
};