var express = require('express');
var router = express.Router();

//Authorize user routes


//get users
router.get('/', function(req,res,next){

	//Get task
		console.log("Succesfully Created");
		res.json([{id: 123, name: "user1"}, {id: 1234, name: "user2"}]);
});

//get user
router.get('/:id', function(req,res,next){

	//Get task
		console.log("Succesfully Created");

		res.json({id: 123, name: "user1"});
});

//Create new profile while registering
router.post('/create', function(req,res,next){
	var user = req.body;
	console.log("Succesfully Created");
	res.json({id: 12345, name: "user3"});

});


//delete user
router.post('/:id/delete', function(req,res,next){
	// Call to delete user
		console.log("Succesfully Deleted");
		res.json({id: 123});
});

//Update
router.post('/:id/edit', function(req,res,next){
	// Call to update user
		console.log("Succesfully Updated");
		res.json({id: 123, name: "User1", email: "user@name.com"});
});


module.exports = router;