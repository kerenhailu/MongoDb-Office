const RouterUser=require('express').Router();
const ReqHendler = require('../Controllers/UserController');


RouterUser.post('/register',ReqHendler.register)
RouterUser.post('/login',ReqHendler.logIn)

module.exports =RouterUser
