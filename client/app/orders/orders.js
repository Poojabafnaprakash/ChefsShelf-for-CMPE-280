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
            for(var i in response.data){
            $scope.orders = response.data[i];
          }

          }
        else{
          //window.location.assign("/#");
        }
    });

});
