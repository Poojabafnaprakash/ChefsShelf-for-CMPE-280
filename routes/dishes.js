// This is a template

var express = require('express');
var router = express.Router();
var dishInfo = require('../server/dishes');

// Get all dishes
router.get('/', function(req,res,next){
	// Get all dishes
 	if(req.session.email){
    dishInfo.getAllDishinfo(function(data){
		console.log("Succesfully Returned");
    console.log(data);
		res.json(data);
		});
  }
  else{
    
    res.json(data);
  }
});


//get dish
router.get('/:id', function(req,res,next){

	//Get dish
    var dishInformation = dishInfo.getDishinfo();
		console.log("Succesfully Fetched");
		res.json(dishInformation);
});


//Create order
router.post('/create', function(req,res,next){
	var order = req.body;
	//Call Create order method
	console.log("Succesfully Created");
	res.json({"success": true, id: 1});
});


//delete order
router.get('/:id/delete', function(req,res,next){
	// Call to delete order
		console.log("Succesfully Deleted");
		res.json({"success": true});
});

module.exports = router;
