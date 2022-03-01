const RouterUser=require('express').Router();
const register = require('../Controllers/UserController');


RouterUser.post('/',register.register)

module.exports =RouterUser
