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
				callbck({success:false});
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


// module.exports.register = function(req, res) {
// 	// These two variables come from the form on
// 	// the views/login.hbs page
// 	var fullname = req.param("fullname");
// 	var email = req.param("email");
// 	var phoneNumber = req.param("phoneNumber");
//   var password = req.param("password");
// 	var confirmPassword = req.param("confirmPassword");
// 	var usertype = req.param("usertype");
//
// 	var json_responses;
// 	var dt = new Date();
// 	var ciphertext = CryptoJS.AES.encrypt(password, 'cmpe280');
// 	var insertUser = "insert into userinfo(usertype,fullname,password,email,phoneNumber) values('"
// 			+ usertype
// 			+ "','"
// 			+ fullname
// 			+ "','"
// 			+ ciphertext
// 			+ "','"
// 			+ email
// 			+ "','" + phoneNumber + "')";
// 	console.log(insertUser);
// 	DBUtil.insertData(function(err, results) {
// 		console.log("DB Results:" + results);
// 		if (err) {
// 			throw err;
// 		} else {
// 			json_responses = {
// 				"statusCode" : 200
// 			};
// 			res.send(json_responses);
// 		}
// 	}, insertUser);

//};
