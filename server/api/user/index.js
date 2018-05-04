'use strict';

var express = require('express');
var app = express();
var fs = require("fs");

var user = {
	"user4" : {
		"name": "özdemir",
		"password": "password4",
		"job": "computer engineer",
		"id" : 4
	}
}

app.get('/listUsers', function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
		res.end(data);
	});
})

app.post('/addUser', function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data){
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		res.end(JSON.stringify(data));
	});
})

app.get('/showUser/:id', function(req,res){
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
		var users = JSON.parse(data);
		var user = users["user" + req.params.id];
		res.end(JSON.stringify(user));
	});
})

app.delete('/delete/:id', function(req,res){
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
		var users = JSON.parse(data);
		delete users["user" + req.params.id];
		res.end(JSON.stringify(users));
	});
})

module.exports = app;