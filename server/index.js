var DBUtil = require('./DBconnection');

var print = function(){
  console.log("print from function");
  DBUtil.fetchData(function(err, rows){
    console.log(err);
    if (rows.length > 0) {
				var cusinesid = rows[0].cusinesid;
        console.log(cusinesid);
      }

  }, "Select * from cusines");
}
module.exports.printing = print;
