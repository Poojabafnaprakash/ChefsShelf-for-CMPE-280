'use strict';

angular.module('myApp.home', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $http, $localStorage) {

  $scope.addToCart = function(dish) {
    if($localStorage.cart == null){
      $localStorage.cart = [];
    }
    $localStorage.cart.push(dish);
  }


      $scope.allDishes = [];
      $http.get('/getAllDishinfo').
        then(function(response) {
          if((response.data).length>0){
              $scope.allDishes = response.data;
          }
        else{
          window.location.assign("/#");
        }
    });

});
