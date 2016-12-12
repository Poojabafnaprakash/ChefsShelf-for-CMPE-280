var express = require('express');
var router = express.Router();
var loginUser = require('../server/loginUser');

router.post('/', function(req,res,next){
    console.log("in routes login");
    var user = req.body;
 		loginUser.login(function(data){
		console.log("Succesfully Returned");
    req.session.email=data.email;
		res.json(data);
  }, user);
});

module.exports = router;
