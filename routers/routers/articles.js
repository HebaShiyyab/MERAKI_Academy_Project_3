const express = require("express");
const {getAllArticles ,
    getAllArticleById,
    getAllArticleByAuthor,
    createArticles,
    updateAnArticleById ,
    deleteArticleById, 
    deleteArticleByAuthor } = require("./../controllers/articles");
    
const articlesRouter = express.Router();
articlesRouter.get("/",getAllArticles);
articlesRouter.get("/:id",getAllArticleById);
articlesRouter.get("/search_1",getAllArticleByAuthor);
articlesRouter.post("/",createArticles);
articlesRouter.put("/:id",updateAnArticleById);
articlesRouter.delete("/:id",deleteArticleById);
articlesRouter.delete("/search_1",deleteArticleByAuthor);



 module.exports = articlesRouter