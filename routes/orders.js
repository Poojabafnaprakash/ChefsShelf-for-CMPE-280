// This is a template

var express = require('express');
var router = express.Router();
var orders = require('../server/orders');

// Get all orders
router.get('/', function(req,res,next){

	// Get all orders
		console.log("Get all orders ");
		orders.getMyOrders(function(data){
			console.log("Succesfully Returned");
	    console.log(data);
			res.json(data);
		});
		//res.json([{id: 123, description: "task1"}, {id: 234, description: "task2"}]);
});

//get order
router.get('/:id', function(req,res,next){

	//Get order
		console.log("Succesfully Fetched");
		res.json({id: 1, description: "order1"});
});


//Create order
router.post('/create', function(req,res,next){
	var orderItems = req.body;
console.log(orderItems);
	//Call Create order method
	console.log("Succesfully Created");
	orders.createOrder(function(data){
			console.log("Succesfully Returned");
	    console.log(data);
			res.json(data);
		}, orderItems);
});


//delete order
router.get('/:id/delete', function(req,res,next){
	// Call to delete order
		console.log("Succesfully Deleted");
		res.json({"success": true});
});

module.exports = router;
