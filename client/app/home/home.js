'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $http) {
    $scope.invalid_login = true;
    	$scope.unexpected_error = true;
      $scope.allDishes = [];
      $http.get('/getAllDishinfo').
        then(function(response) {
        $scope.allDishes = response.data;
    });

});
