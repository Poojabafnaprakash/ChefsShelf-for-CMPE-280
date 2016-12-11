'use strict';

angular.module('myApp.logout', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/logout', {
    //templateUrl: 'logout/logout.html',
    controller: 'LogoutCtrl'
  });
}])

.controller('LogoutCtrl', function($scope, $http, $sessionStorage) {


      $scope.logout = function(){
        console.log("in logout");
      $http.get('/logout').
        then(function(response) {
          $sessionStorage.user = {};
          window.location.assign("/");
    });
  }

});
