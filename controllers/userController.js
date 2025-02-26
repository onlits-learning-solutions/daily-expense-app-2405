const User = require("../models/user");
const asyncHandler = require("express-async-handler");

exports.getUsers = (req, res) => {
  res.send("Get all users");
}

exports.postUser = (req, res) => {
  const user = new User({name: req.body.name, email: req.body.email, password: req.body.password});
  user.save();
  res.send("Successful!");
}