const articles = require("../../db/db");
const { uuid } = require("uuidv4");

const getAllArticles = (req, res) => {
  res.status(200).json(articles);
};

const getAllArticleById = (req, res) => {
  const id = req.params.id;
  const article = articles.find((article) => {
    article.id == id;
  });
  res.status(200).json(article);
};

const getAllArticleByAuthor = (req, res) => {
  const author = req.query.author;
  const authorArticle = articles.filter((article) => {
    article.author === author;
  });
  res.status(200).json(authorArticle);
};
const createArticles = (req, res) => {
  const { title, description, author } = req.body;
  const newArticle = { id: uuid(), title, description, author };
  articles.push(newArticle)
  res.status(201).json(newArticle);
};

const updateAnArticleById = (req, res) => {
    const { title, description, author } = req.body;
    const id= req.params.id;
    const article = articles.find((article)=>{
        article.id == id
    })
        const index = articles.indexOf(article);
        if(title)articles[index].title = title;
        if(description)articles[index].description = description;
        if(author)articles[index].author = author;

    res.status(20).json(articles[index]);
  };
  
  const deleteArticleById  = (req, res) => {
    const id= req.params.id;
    const article = articles.find((article)=>{
        article.id == id
    })
       if(!article) return res.status(404).json('not found');
       const index = articles.indexOf(article);
       articles.splice(index, 1);
       res.status(200).json({
		success: true,
		message: `Success Delete atricle with id => ${id}`,
	});
   
  };
  const deleteArticleByAuthor  = (req, res) => {
    const anther= req.body.anther;
    const authorArticles  = articles.filter((article)=>{
        article.anther == anther;
    })
       if(!authorArticles.length) return res.status(404).json('not found');
       for (let index = 0; index < authorArticles.length; index++) {
		const i = articles.indexOf(authorArticles[index]);
		articles.splice(i, 1);
	}

	res.status(200).json({
		success: true,
		message: `Success delete all the articles for the author => ${author}`,
	});
   
  };
module.exports = {
  getAllArticles,
  getAllArticleById,
  getAllArticleByAuthor,
  createArticles,
  updateAnArticleById ,
  deleteArticleById ,
  deleteArticleByAuthor,
};
