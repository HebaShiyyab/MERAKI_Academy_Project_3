const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const comments = new mongoose.Schema({
  comment: { type: String, required: true },
  commenter: { type: mongoose.Schema.ObjectId, required: true, ref: "User" },
});
const users = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, min: 10, max: 100, required: true },
  country: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

const articles = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: "User" },
  comments: [{ type: mongoose.Schema.ObjectId, ref: "Comment" }],
});
users.pre("save", async function () {
  this.email = this.email.toLowerCase();
  const salt = 10;
  this.password = await bcrypt.hash(this.password, salt);
});
const user1 = mongoose.model("User", users);
const articles1 = mongoose.model("Articles", articles);
const comments1 = mongoose.model("Comment", comments);

module.exports.Comment = comments1;
module.exports.User = user1;
module.exports.Articles = articles1;
