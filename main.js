const express = require("express");
const app = express();
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
app.post("/articles", (req, res) => {
  // const createNewArticle = {title:req.body.title,description:req.body.description, author:req.body.author};
  const createNewArticle = {
    title: "Server",
    description: "Lorem, Quam, mollitia.",
    author: "Ayman",
  };
  const { title, description, author } = req.body;
  articles.push(createNewArticle);
  res.status(201);
  res.json(createNewArticle);
  //   res.json(articles);
});
app.listen(port, () => {
  console.log(`the server at http://localhost:${port}`);
});
