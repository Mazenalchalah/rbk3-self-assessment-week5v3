var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

app.get('./users',function(req,res){
User.Findall('users')
.then(function(req,res){
	res.send('users');
})
})

module.exports = { 
  app: app,
  User: User
};
