var DBUtil = require('./DBconnection');
var CryptoJS = require("crypto-js");

module.exports.register = function(callback, user){
	console.log("in login server");
	console.log(user);
	var ciphertext = CryptoJS.AES.encrypt(user.password, 'cmpe280');
  DBUtil.insertData(function(err, resp){
    console.log("db Returned");
    console.log(resp);
    if (resp.affectedRows > 0) {

    		  DBUtil.fetchData(function(err, rows){
			    console.log("db Returned");
			    console.log(rows);
			    if (rows.length > 0) {
						console.log("ROW 0: "+rows.insertId);
							callback({success:true, email: rows[0].email, 
												user: { id: rows[0].useriid, 
																email: rows[0].email,
																usertype: rows[0].usertype,
																fullname: rows[0].fullname,
																lastname: rows[0].lastname,
																phoneNumber: rows[0].phoneNumber
																}
									});
			      }
						else{
							callbck({success:false});
						}

			  }, "Select * from userinfo where userid = '" +resp.insertId + "'");
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
