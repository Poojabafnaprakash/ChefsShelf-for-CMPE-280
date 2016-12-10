var express = require('express');
var router = express.Router();
var loginUser = require('../server/loginUser');

router.post('/', function(req,res,next){
    console.log("in routes login");
    var user = req.body;
    console.log(req.body);
    console.log(user);
 		loginUser.login(function(data){
		console.log("Succesfully Returned");
    req.session.email=data.email;
    console.log(data);
		res.json(data);
  }, user);
});

module.exports = router;
