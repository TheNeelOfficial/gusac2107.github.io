/*
 * Express router for serving templates
 * Team Sukor
 */

 const h  = require('http'),
 	   e  = require('express'),
 	   f  = require('fs'),
 	   bp = require('body-parser'),
 	   cp = require('cookie-parser');

module.exports.unleash = function () {
	var port = process.env.PORT | 6020;
	var app = e();
	var r = e.Router();
	
	app.use(e.static(__dirname + '/angular'));
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});
	app.set('title', 'Paradox');
	app.use(e.static('assets'));
	app.use(cp());
	app.use(bp.json());
	app.use(bp.urlencoded({extended: true}));


	r.get('/', function (req, res) {
		res.sendFile('index.html');
	});

	app.use('/', r);

	var server = h.createServer(app);
	server.listen(port, function () {
		console.log('Front end server up at http://localhost:/' + port);
	});

}
