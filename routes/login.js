var express = require('express');
var router = express.Router();
var login = require('../server/login');

router.post('/', function(req,res,next){
    console.log("in routes login");
    var user = req.body;
 		login.register(function(data){
		console.log("Succesfully Returned");
		res.json(data);
  }, user);
});

module.exports = router;
