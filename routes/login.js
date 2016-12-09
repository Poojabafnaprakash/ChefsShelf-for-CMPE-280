var express = require('express');
var router = express.Router();
var login = require('../server/login');

router.post('/', function(req,res,next){
    console.log("in routes login");
    var user = req.body;
    console.log(req.body);
    console.log(user);
 		login.register(function(data){
		console.log("Succesfully Returned");
    console.log(data);
		res.json(data);
  }, user);
});

module.exports = router;
