var express = require('express');
var router = express.Router();
var logout = require('../server/logout');
// Get all dishes
router.get('/', function(req,res,next){
    console.log("logging out");

    logout.register(function(data){
    console.log("Succesfully logged out");
    res.json(data);
    });
    var data=null;
    res.json(data);
});
module.exports = router;
