const express = require('express');

const { createNewComment } = require('./../controllers/comments');


const authentication = require('./../middlewares/authentication');
const authorization = require('./../middlewares/authorization');

const commentsRouter = express.Router();

commentsRouter.post(
	'/articles/:id/comments',
	authentication,
	authorization('CREATE_COMMENTS'),
	createNewComment,
);

module.exports = commentsRouter;