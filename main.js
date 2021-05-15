const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const port = 5000;

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
app.use(express.json());
app.get("/articles", (req, res) => {
  res.status = 200;
  res.json(articles);
});
app.get("/articles/search", (req, res) => {
  const user = req.query.id;
  const found = articles.find((element) => {
    return element.id === Number(user);
  });
  if (found) {
    res.status(200);
    res.json(found);
  } else {
    res.status(404);
    res.json("User not found ");
  }
});
app.get("/articles/search_1/:author", (req, res) => {
  const user1 = req.params.author;
  const found1 = articles.find((element) => {
    return element.author === user1;
  });
  if (found1) {
    res.status(200);
    res.json(found1);
  } else {
    res.status(404);
    res.json("User not found ");
  }
});
app.post("/articles", (req, res, next) => {
  const { title, description, author } = req.body;
  const userId = uuidv4();
  const createNewArticle = {
    title: title,
    description: description,
    author: author,
    id: userId,
  };

  res.status(201);
  articles.push(createNewArticle);
  res.json(createNewArticle);
  next();
});
app.put("/articles/:id", (req, res) => {
  res.status(200);
  const { title, description, author } = req.body;
  const createNewArticle = {
    title: title,
    description: description,
    author: author,
  
  };
  createNewArticle.id = id ;
  res.json(createNewArticle);
});

app.delete("/articles/:id",(req,res)=>{

})
app.listen(port, () => {
  console.log(`the server at http://localhost:${port}`);
});
