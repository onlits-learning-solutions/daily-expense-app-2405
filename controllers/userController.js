const User = require("../models/user");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
}

exports.getUser = async (req, res) => {
  const user = await User.find({ email: req.params.email })
  res.json(user);
}

exports.postUser = (req, res) => {
  const user = new User({ name: req.body.name, email: req.body.email, password: req.body.password });
  user.save();
  res.send("Successful!");
}

exports.authenticate = async (req, res) => {
  const user = await User.find({ email: req.body.email })
  if (user[0]) {
    if (user[0].password == req.body.password) {
      const key = "sldfjslfj00980sdfjlsfj$#";
      res.json(key);
    }
  }
  else
    res.status(404).json(null);
}