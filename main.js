const express = require("express");
const db = require("./project_3_v01");
const { User, Articles } = require("./Schema");
const { uuid } = require("uuidv4");
const port = 5000;

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  const { firstName, lastName, age, country, email, password } = req.body;
  // const userId = uuidv4();
  const userNew = new User({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
  });
  await userNew
    .save()
    .then((result) => {
      res.json(result);
      res.status(201);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.get("/articles", (req, res) => {
  Articles.find({})
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
// articles by author 
app.get("/articles/author", async (req, res) => {
  let authorId;
  await User.findOne({ firstName: req.query.author })
    .then((result) => {
      authorId = result._id;

      res.json(authorId);
    })
    .catch((err) => {
      res.json(err);
    });
  Articles.findOne({ author: authorId })
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
// articles by id 
app.get("/articles/id", (req, res) => {
  Articles.findOne({_id:req.query.id})
    .populate("author", "firstName")
    .exec()
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/articles", async (req, res) => {
  const { title, description, author } = req.body;
  // const userId = uuidv4();
  const articlesNew = new Articles({
    title,
    description,
    author,
  });
  await articlesNew
    .save()
    .then((result) => {
      res.json(result);
      res.status(201);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/articles/id ", (req, res) => {
  const{title,description}=req.body;
    Articles.updateOne({_id:req.query.id},{title,description})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.delete("/articles/id", (req, res) => {
  Articles.deleteOne({ _id:req.query.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.delete("/articles/author", (req, res) => {
  Articles.deleteOne({ author: author })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.listen(port, () => {
  console.log(`the server at http://localhost:${port}`);
});
