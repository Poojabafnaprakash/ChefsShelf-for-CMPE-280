var DBUtil = require('./DBconnection');

module.exports.getAllDishinfo = function(callback){
  console.log("print from function");
  DBUtil.fetchData(function(err, rows){
    console.log("db Returned");
    console.log(rows);
    if (rows.length > 0) {
        callback(rows);
				// return rows;
      }

  }, "select * from dishinfo");

}




//get dish info
module.exports.getDishinfo = function(id){
  console.log("print from function");
  DBUtil.fetchData(function(err, rows){
    console.log(err);
    console.log(rows);
    if (rows.length > 0) {
				return rows[0];
      }
  }, "select * from dishinfo where dishid=" + id );
}
