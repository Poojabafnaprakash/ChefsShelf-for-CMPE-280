'use strict';

angular.module('myApp.home', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $http, $localStorage, $sessionStorage) {




  $scope.addToCart = function(dish) {
    if($localStorage.cart == null){
      $localStorage.cart = [];
    }
    $localStorage.cart.push(dish);
  }

  $scope.userLoggedIn = function() {
    $scope.LoggedIn = $sessionStorage.user.userid != null;
    console.log($scope.userLoggedIn);
    return $scope.LoggedIn;
  }

  $scope.logout = function(){
    console.log("in logout");
  $http.get('/logout').
    then(function(response) {
      $sessionStorage.user = {};
      window.location.assign("/");
});
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
