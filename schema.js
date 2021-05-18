const mongoose = require("mongoose");

const users = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, min: 10, max: 100, required: true },
  country: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

const articles = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  author: { type: mongoose.Schema.ObjectId, ref: "users" },
});

const user1 = mongoose.model("User", users);
const articles1 = mongoose.model("Articles", articles);

module.exports.User = user1;
module.exports.Articles = articles1;
