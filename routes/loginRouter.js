const loginRouter = require('express').Router();
const { userLogin } = require('../controllers/userController');

loginRouter.post('/', userLogin);
module.exports = loginRouter;
