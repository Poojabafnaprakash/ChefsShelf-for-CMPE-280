'use strict';

angular.module('myApp.logout', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/logout', {
    //templateUrl: 'logout/logout.html',
    controller: 'LogoutCtrl'
  });
}])

.controller('LogoutCtrl', function($scope, $http, $sessionStorage) {


    

});
