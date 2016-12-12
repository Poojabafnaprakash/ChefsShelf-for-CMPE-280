var DBUtil = require('./DBconnection');

module.exports.getAllDishinfo = function(callback){
  console.log("print from function");
  DBUtil.fetchData(function(err, rows){
    console.log("db Returned");
    if (rows.length > 0) {
        callback(rows);
				// return rows;
      }

  }, "select * from dishinfo");

}

module.exports.createDish = function(callback, data){
    DBUtil.insertData(function(err, response){
      if (response.affectedRows == 1) {

          callback({success:true});
        }
        else{
          callback({success:false});
        }

    }, "insert into dishinfo(userid,description, price, storename, image_name) values("
          + data.userid
          + ",'"
          + data.description
          + "',"
          + data.price
          + ",'"
          + data.storename
          + "','"
          + data.image_name
          + "')");
  }


module.exports.getChefsDishes = function(callback, query){
  console.log("print from function");
  DBUtil.fetchData(function(err, rows){
    console.log(err);
    if (rows.length > 0) {
        callback(rows);
      }
  }, "select * from dishinfo where userid=" + query.userid );
}

//get dish info
module.exports.getDishinfo = function(id){
  console.log("print from function");
  DBUtil.fetchData(function(err, rows){
    console.log(err);
    if (rows.length > 0) {
				return rows[0];
      }
  }, "select * from dishinfo where dishid=" + id );
}
