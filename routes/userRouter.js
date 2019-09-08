const userRouter = require('express').Router();
const registerRouter = require('./registerRouter');
const loginRouter = require('./loginRouter');

userRouter.use('/register', registerRouter);
userRouter.use('/login', loginRouter);

module.exports = userRouter;
