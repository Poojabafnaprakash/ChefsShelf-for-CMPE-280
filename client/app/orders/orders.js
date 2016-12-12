'use strict';

angular.module('myApp.orders', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/orders', {
    templateUrl: 'orders/orders.html',
    controller: 'OrdersCtrl'
  });
}])
.controller('OrdersCtrl', function($scope, $http, $sessionStorage) {

				$scope.orders = {}
	   //    $http.get('/orders', {params: {user_id: $sessionStorage.user.userid}}  ).
    //     then(function(response) {
    //       if(response.data != null){
    //       	console.log("Response");
    //       	console.log(response.data);
    //         for(var i in response.data){
    //           for(var j in i){
    //             console.log("in j" + response.data.id);
    //           }
    //         }
    //         $scope.orders = response.data;

    //       }
    //     else{
    //       //window.location.assign("/#");
    //     }
    // });
      console.log($sessionStorage.user);
      $http({
        method : "GET",
        url : '/orders',
        params : {user_id: $sessionStorage.user.userid}
      }).success(function(response) {
        console.log(response);
        $scope.orders = Object.values(response)[0];
        // checking the response data for statusCode

        if (response.statusCode == 401) {

        } else{
          // Making a get call to the '/redirectToHomepage' API
          //window.location.assign("/#home");
        }
      }).error(function(error) {
      });

});
