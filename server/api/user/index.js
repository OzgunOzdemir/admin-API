'use strict';

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
		res.end(data);
	});
})

module.exports = app;