//orders model
var DBUtil = require('./DBconnection');

module.exports.getMyOrders = function(callback, query){
  DBUtil.fetchData(function(err, rows){
    console.log("db Returned");
    if (rows.length > 0) {
    	orders_map = {}
			for ( var i = 0; i<rows.length; i++){
				if(orders_map[rows[i].orderid] == null){
				    orders_map[rows[i].orderid] = [];
				}
				orders_map[rows[i].orderid].push( rows[i]);
			}

      callback(orders_map);
    }

  // ToDo: Add current user id  join orders where orders.user_id = 1 and orders.id = order_items.order_id
  }, "select *, dishinfo.userid as chef_id from order_detail join dishinfo where order_detail.userid = " + query.user_id +" and dishinfo.dishid = order_detail.dishid");
}

module.exports.createOrder = function(callback, data){
    //console.log(orders);
    var orders = data.items;
    DBUtil.insertData(function(err, response){
      if (response.affectedRows == 1) {
        order_details = "";
        for(var i = 0; i < orders.length; i++){
          order_details += "("
                          + response.insertId
                          + ","
                          + data.userid
                          + ","
                          + orders[i].dishid
                          + ","
                          + orders[i].price
                          + "),";
        }
        // dishid":1,"cuisineid":"3","userid":1,"description":"Chicken Biryani","price":10.99,"image":null,"storename":"Food Stall @ John
        order_details = order_details.slice(0, -1);

        DBUtil.insertData(function(err, response){
          if (response.affectedRows > 1) {
              callback({success:true});
            }
            else{
              callback({success:false});
            }
          }, "insert into order_detail(orderid, userid, dishid, price) values"+order_details);

        }
        else{
          callback({success:false});
        }

    }, "insert into orders(userid,statusid) values("
          + data.userid
          + "," + "1" + ")");

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
