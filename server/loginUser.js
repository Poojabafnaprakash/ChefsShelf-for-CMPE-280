var DBUtil = require('./DBconnection');
var CryptoJS = require("crypto-js");

module.exports.login = function(callback, user){
	console.log("in login server");
	console.log(user);
  DBUtil.fetchData(function(err, rows){
    console.log("db Returned");
    console.log(rows);
    if (rows.length > 0) {
        callback({success:true});
				// return rows;
      }
			else{
				callbck({success:false});
			}

  }, "Select * from userinfo where email = '" +user.email + "'");
}
