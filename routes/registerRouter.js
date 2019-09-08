const registerRouter = require('express').Router();
const { userRegister } = require('../controllers/userController');

registerRouter.post('/', userRegister);

module.exports = registerRouter;
