const express = require("express");
const db = require("./project_3_v01");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User, Articles, Comment } = require("./Schema");
const { uuid } = require("uuidv4");
require("dotenv").config();
const port = process.env.PORT;
const secret = process.env.SECRET;

const app = express();
app.use(express.json());
const articles = [
  {
    id: 1,
    title: "How I learn coding?",
    description: "Lorem, Quam, mollitia.",
    author: "Jouza",
  },
  {
    id: 2,
    title: "Coding Best Practices",
    description: "Lorem, ipsum dolor sit, Quam, mollitia.",
    author: "Besslan",
  },
  {
    id: 3,
    title: "Debugging",
    description: "Lorem, Quam, mollitia.",
    author: "Jouza",
  },
];
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
      console.log(result);
      res.json(result);
      res.status(201);
    })
    .catch((err) => {
      console.log(err);

      res.json(err);
    });
  
});
app.post("/login", async (req, res) => {
  await User.findOne({ email: req.body.email })
    .then((result) => {
      // console.log(result);
      if (result) {
        // console.log(result);
        bcrypt.compare(req.body.password, result.password, (err, result1) => {
          // console.log(result.password);
          // console.log(result1);
          // console.log(result.role);
          if (result1) {
            // console.log(result1);
            const payload = {
              userId: result._id,
              country: result.country,
              // role:result.role
            };
            const options = {
              expiresIn: "60h",
            };
            const token = jwt.sign(payload, secret, options);
            res.status(200);
            res.json(token);
          } else {
            res.json("The password you’ve entered is incorrect");
            res.json(403);
          }
        });
      } else {
        res.json("The email doesn't exist");
        res.json(404);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
// const auth = (req, res, next) => {
//   if (!req.headers.authorization) {
//     // console.log(err)
//     return res.json(err);
//   } else {
//     const token = req.headers.authorization.split(" ")[1];
//     jwt.verify(token, secret, (err, result1) => {
//       console.log(result1);
//       if(err){
//         res.json(err);
//       }
//       if (result1) {
//         req.token = result1;
//         next()
//       };
//     });
//   }
// };

// app.get("/login", auth, (req, res) => {
//   console.log("heba");
// });
app.post("/articles/:id/comments", (req, res) => {
  const id = req.params.id;
  const { comment, commenter } = req.body;
  const commentNew = new Comment({ comment, commenter });
  commentNew
    .save()
    .then((result) => {
      res.status(201);
      res.json(result);
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
  Articles.findOne({ _id: req.query.id })
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

app.put("/articles", (req, res) => {
  // Articles.updateOne({_id:"60a392d347ce314f407c53b2"},{title:"books"},{description:"can you read anther book you read"})
  Articles.updateOne(
    { _id: req.body.id },
    { title: req.body.title },
    { description: req.body.description }
  )

    .then((result) => {
      console.log("heb");
      res.json(result);
    })
    .catch((err) => {
      console.log("Error");
      res.json(err);
    });
});
app.delete("/articles/id", (req, res) => {
  Articles.deleteOne({ _id: req.query.id })
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
