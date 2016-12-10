var mongo = require("./mongo");
var mongoURL = 'mongodb://localhost:27017/HomeCooking';
var mongoDbHelper = require('./mongo-db-helper');
var mongodb = require('mongodb');


exports.getPhoto = function(request,response){
	var userId = 1;// for testing purpose
    //var userId = request.session.userId;

	mongo.connect(mongoURL, function() {
		var userDetails = mongo.collection('profilePicture');
		mongoDbHelper.read(userDetails,{'userId':userId},null,null, function(data) {
			     response.send({"status":200,"message":data});
			});
		});
};
