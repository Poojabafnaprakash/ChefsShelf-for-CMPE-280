'use strict';

angular.module('myApp.orders', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/orders', {
    templateUrl: 'orders/orders.html',
    controller: 'OrdersCtrl'
  });
}])
.controller('OrdersCtrl', function($scope, $http) {

				$scope.orders = {}
	      $http.get('/orders').
        then(function(response) {
          if(response.data != null){
          	console.log("Response");
          	console.log(response.data);
            for(var i in response.data){
              for(var j in i){
                console.log("in j" + response.data.id);
              }
            }
            $scope.orders = response.data;

          }
        else{
          //window.location.assign("/#");
        }
    });

});
