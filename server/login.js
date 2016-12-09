var DBUtil = require('./DBconnection');
var CryptoJS = require("crypto-js");

module.exports.register = function(callback, user){
	console.log("in login server");
	console.log(user);
	var ciphertext = CryptoJS.AES.encrypt(user.password, 'cmpe280');
  DBUtil.insertData(function(err, rows){
    console.log("db Returned");
    console.log(rows);
    if (rows.length > 0) {
        callback({success:true});
				// return rows;
      }
			else{
				callback({success:false});
			}

  }, "insert into userinfo(usertype,fullname,password,email,phoneNumber) values('"
				+ user.usertype
				+ "','"
				+ user.fullname
				+ "','"
				+ ciphertext
				+ "','"
				+ user.email
				+ "','" + user.phoneNumber + "')");

}
