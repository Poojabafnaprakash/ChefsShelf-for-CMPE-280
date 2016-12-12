var mongo = require("./mongo");
var mongoURL = 'mongodb://localhost:27017/HomeCooking';
var mongoDbHelper = require('./mongo-db-helper');
var mongodb = require('mongodb');
var express = require('express');
var router = express.Router();
var dishesUtil = require('../server/dishes');


//add images
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function(req,file,cb){
      cb(null,'client/app/uploads/')
    },
    filename: function(req,file,cb){
      cb(null,Date.now() + file.originalname);
    }
});
var upload = multer({ storage: storage  });
//add images

router.post('/', upload.any(),function(req, res, next) {
  var userId = 1; // for testing purpose
  console.log("In upload dishes");
  var dishDetail = {
    userid: req.body.userid,
    description: req.body.description,
    price: req.body.price,
    storename: req.body.storename,
    image_name: picDetails = req.files[0].filename
  }
  console.log(dishDetail);
  var picDetails = req.files[0];
  dishesUtil.createDish(function(data){
      console.log("Succesfully Created Dishes");
      res.redirect('/#/chefProfile');
    }, dishDetail);

  //   mongo.connect(mongoURL, function() {
		// var userDetails = mongo.collection('profilePicture');
		// mongoDbHelper.insertIntoCollection(userDetails, {'userId':userId,'details':picDetails,'description':description,'price':price}, function(error) {
		// 			if(error){
		// 				res.send({"Status":500,
		// 					"Message": "Unable to upload"});
		// 				}else{
		// 					res.redirect('/#/chefProfile');
		// 				}
		// 	});
		// });
});
//images
module.exports = router;
