const RouterUser=require('express').Router();
const register = require('../Controllers/UserController');


RouterUser.post('/',register.register)
RouterUser.post('/login',register.logIn)

module.exports =RouterUser
