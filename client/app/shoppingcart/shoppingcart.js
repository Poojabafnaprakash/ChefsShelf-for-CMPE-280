'use strict';

angular.module('myApp.shoppingcart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shoppingcart', {
    templateUrl: 'shoppingcart/shoppingcart.html',
    controller: 'ShoppingcartCtrl'
  });
}])

.controller('ShoppingcartCtrl', [function() {

}]);
