//orders model
var DBUtil = require('./DBconnection');

module.exports.getMyOrders = function(callback){
  DBUtil.fetchData(function(err, rows){
    console.log("db Returned");
    console.log(rows);
    if (rows.length > 0) {
    	orders_map = {}
			for ( var i = 0; i<rows.length; i++){
				if(orders_map[rows[i].orderid] == null){
				    orders_map[rows[i].orderid] = [];
				}
				orders_map[rows[i].orderid].push( rows[i]);
			}

			console.log(orders_map);
      callback(orders_map);
    }

  // ToDo: Add current user id  join orders where orders.user_id = 1 and orders.id = order_items.order_id
}, "select *, dishinfo.userid as chef_id from order_detail join dishinfo where dishinfo.dishid = order_detail.dishid");

}


module.exports.getAllDishinfoByCategory = function(callback){
  console.log("print from function");

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
