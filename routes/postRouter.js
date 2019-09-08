const postRouter = require('express').Router();
const { verifyToken, posts } = require('../controllers/userController');

postRouter.get('/', verifyToken, posts);

module.exports = postRouter;
