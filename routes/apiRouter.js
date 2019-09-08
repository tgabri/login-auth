const apiRouter = require('express').Router();
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');

apiRouter.route('/');

apiRouter.use('/user', userRouter);
apiRouter.use('/posts', postRouter);

module.exports = apiRouter;
