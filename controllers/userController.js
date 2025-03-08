const User = require("../models/user");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
}

exports.getUser = async (req, res) => {
  const user = await User.find({email: req.params.email})
  res.json(user);
}

exports.postUser = (req, res) => {
  const user = new User({ name: req.body.name, email: req.body.email, password: req.body.password });
  user.save();
  res.send("Successful!");
}