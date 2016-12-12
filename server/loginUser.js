var DBUtil = require('./DBconnection');
var CryptoJS = require("crypto-js");

module.exports.login = function(callback, user){
	console.log("in login server");
	console.log(user);
  DBUtil.fetchData(function(err, rows){
    console.log("db Returned");
    console.log(rows);
    if (rows.length > 0) {
			console.log("ROW 0: "+rows[0].email);
				callback({success:true, email: rows[0].email,
					user: { userid: rows[0].userid, 
									email: rows[0].email,
									usertype: rows[0].usertype,
									fullname: rows[0].fullname,
									lastname: rows[0].lastname,
									phoneNumber: rows[0].phoneNumber
									}
						});
				// return rows;
      }
			else{
				callbck({success:false});
			}

  }, "Select * from userinfo where email = '" +user.email + "'");
}
