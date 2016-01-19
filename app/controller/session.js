var db = require('../../db');
var sq = require('../../config/sql');

exports.render = function(req, res, next) {
	res.render('requests.html', {
		msg: "Welcome"
	});
};

exports.create = function(req, resp) {
	var title = req.body.title;
	var presenterId = req.body.presenterId;
	var locationId = req.body.locationId;
	var date = req.body.date;
	var description = req.body.description;

	var query = db.config.query(sq.session.create, [title, presenterId, locationId, date, description], function(err, rows) {
		if (err) {
			console.log(err)
			resp.send({});			
		}		
		resp.send(rows);
	});
}

exports.getLocations = function(req, resp) {
	db.config.query(sq.session.getLocations, function(err, rows) {
		if (err) {
			console.log(err)
			resp.send({});			
		}	
		console.log(rows);	
		resp.send(rows);
	});
}

exports.subscribe = function(req, resp) {
	var userId = req.body.userId;
	var sessionId = req.body.sessionId;	

	var query = db.config.query(sq.session.subscribe, [userId, sessionId, true], function(err, rows) {
		if (err) {
			console.log(err)
			resp.send({});			
		}		
		resp.send(rows);
	});
}