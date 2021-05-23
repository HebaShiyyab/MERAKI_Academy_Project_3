const express = require("express");
require("dotenv").config();
const db  = require('./db/db');


const articlesRouter = require("./routers/routers/articles")
const usersRouter = require('./routers/routes/users');
const authRouter = require('./routers/routes/auth');
const commentsRouter = require('./routers/routes/comments');
const roleRouter = require('./routers/routers/role')
const app = express();

app.use("/users",usersRouter);
app.use("/articles",articlesRouter);
app.use(authRouter);
app.use(commentsRouter);
app.use(express.json());
app.use(roleRouter);


const port = process.env.PORT || 5000;
const secret = process.env.SECRET;



app.listen(port, () => {
  console.log(`the server at http://localhost:${port}`);
});
