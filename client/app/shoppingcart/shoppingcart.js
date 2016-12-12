'use strict';

angular.module('myApp.shoppingcart', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shoppingcart', {
    templateUrl: 'shoppingcart/shoppingcart.html',
    controller: 'ShoppingcartCtrl'
  });
}])

.controller('ShoppingcartCtrl', function($http, $scope, $localStorage, $sessionStorage) {

  console.log($localStorage.cart);
    $scope.data = $localStorage.cart;

  $scope.deleteFromCart = function(dish) {
     var index = $localStorage.cart.indexOf(dish);
     $localStorage.cart.pop(index);
  }

  $scope.checkout = function(items) {
    $http({
      method : "POST",
      url : '/orders/create',
      data : {items: items, userid: $sessionStorage.user.userid}

    }).success(function(data) {

        // Making a get call to the '/redirectToHomepage' API
        $localStorage.cart = [];

        window.location.assign("/#orders");
    })
  };

});
