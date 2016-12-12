var mongo = require("./mongo");
var mongoURL = 'mongodb://localhost:27017/HomeCooking';
var mongoDbHelper = require('./mongo-db-helper');
var mongodb = require('mongodb');
var dishesUtil = require('../server/dishes');


exports.getPhoto = function(request,response){
	var userId = 1;// for testing purpose
    //var userId = request.session.userId;

	dishesUtil.getChefsDishes(function(data){
			console.log("Succesfully Returned");
			response.send({"status":200,"message":data});
		}, request.query);


	// mongo.connect(mongoURL, function() {
	// 	var userDetails = mongo.collection('profilePicture');
	// 	mongoDbHelper.read(userDetails,{'userId':userId},null,null, function(data) {
	// 		     response.send({"status":200,"message":data});
	// 		});
	// 	});
};
