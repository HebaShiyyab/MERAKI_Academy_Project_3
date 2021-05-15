const express = require("express");
const app = express();
const { uuid } = require("uuidv4");
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
  const id = req.params.id;

  let index;
  const found = articles.find((element, i) => {
    index = i;
    return element.id == id;
  });

  const { title, description, author } = req.body;

  articles[index] = { id, title, description, author };

  res.status(200);
  res.json(articles[index]);
});

app.delete("/articles/:id", (req, res) => {
  const id = req.params.id;
  const delMessage = {
    success: true,
    message: `Success Delete article with id => ${id}`,
  };
  let index;
  const found = articles.find((element, index) => {
    return element.id == id;
  });

  articles.splice(index, 1);

  res.json(delMessage);
});

app.delete("/articles", (req, res) => {
  const author = req.query.author;
  const delMessageAut = {
    success: true,
    message: `Success delete all articles for the author => ${author}`,
  };
  let obj = {};
  for (i = 0; i < articles.length; i++) {
    if (author == articles[i].author) {
      abj = articles.splice(i, 1);
    }
  }
  res.json(delMessageAut);
});

app.listen(port, () => {
  console.log(`the server at http://localhost:${port}`);
});
